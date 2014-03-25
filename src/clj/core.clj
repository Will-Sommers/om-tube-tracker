(ns om-tube-tracker.core
	(:require [ring.middleware.cors :as cors]
						[ring.util.response :refer [file-response]]
						[ring.adapter.jetty :refer [run-jetty]]
					  [ring.middleware.edn :refer [wrap-edn-params]]
						[compojure.core :refer [defroutes GET]]
						[compojure.handler :as handler]
						[compojure.route :as route]
						[clojure.data.xml :as xml]
						[clj-http.client :as client]
						[cemerick.url :refer [url url-encode]]))

(def yahoo-proxy-url "http://query.yahooapis.com/v1/public/yql?q=")
(def select-url "select * from xml where url=")
(def tfl-url "http://cloud.tfl.gov.uk/TrackerNet/PredictionDetailed")

(defn build-url [line-nick station-nick]
	(str yahoo-proxy-url (url-encode (str
																		select-url
																		"'"
																		tfl-url
																		"/" line-nick
																		"/" station-nick
																		"'"))))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn new-rename-keys [new-keys coll]
	(clojure.set/rename-keys coll new-keys))

(defn process-tube-data [xml-resp] (remove nil? (into [] (for [node (xml-seq (xml/parse-str (:body xml-resp)))]
																						 	(if (some #(= (:tag node) %) '(:T :S :P))
																								(->> (remove #(= (key %) :content) node)
																										 (apply concat)
																										 (apply hash-map)
																										 (new-rename-keys {:tag :identifier})))))))
(defn reprocess [coll]
	(reduce (fn [coll x]
						(cond
						 (= :S (:identifier x)) (assoc coll :line x)
						 (= :P (:identifier x)) (let [value (if (get-in coll [:station :platforms])
																									 (get-in coll [:station :platforms])
																									 [])]
																			(assoc-in coll [:station :platforms] (conj value x)))
						 (= :T (:identifier x)) (let [platform-last (last (get-in coll [:station :platforms]))
																					platform-firsts (butlast (get-in coll [:station :platforms]))
																					value (if (:trains platform-last)
																											 (:trains platform-last)
																											 [])]
						 													(do
						 														(assoc-in coll [:station :platforms] (conj platform-firsts
																																							(assoc platform-last :trains (conj value x))))))
						 :else coll))	 {} coll))


(defn send-api-req [line-nick station-nick]
	(let [resp (reprocess (process-tube-data (client/get (build-url line-nick station-nick))))]
		(generate-response resp)))


(defn index []
	(file-response "public/html/index.html" {:root "resources"}))

(defroutes routes
	(GET "/" [] (index))
	(GET "/line/:line-nick/station/:station-nick" [line-nick station-nick] (send-api-req line-nick station-nick))
	(route/files "/" {:root "resources/public"}))

(def app
	(-> routes
			(cors/wrap-cors
        :access-control-allow-origin #"http://127.0.0.1:8080"
        :access-control-allow-methods ["GET"]
        :access-control-allow-headers ["Content-Type"])
			wrap-edn-params))

(defonce server
	(run-jetty  #'app {:port 8080 :join? false}))
