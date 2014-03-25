(ns om-tube-tracker.core
(:require-macros [cljs.core.async.macros :refer [go alt!]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
						[clojure.string :as string]
            [cljs.core.async :as async :refer [put! chan <! sliding-buffer close!]]
						[goog.net.XhrIo :as xhr]
						[cljs.reader :as reader]))

(enable-console-print!)

(def js-data (js->clj js/data :keywordize-keys true))

(def data (into [] (for [[k v] (:lines js-data)]
											{:name v
													:nick (name k)
													:stations (map
																		 #(hash-map :nick %
																			 :name ((keyword %) (:stations js-data)))
																		 (k (:stationsOnLines js-data)))})))

(def state (atom {:tube-data data
									:selected-stations {}}))

(defn GETS [url c-api-resp]
  (let [ch c-api-resp]
    (xhr/send url
              (fn [event]
                (let [res (-> event .-target .getResponseText)]
                  (put! ch res))))
    ch))


(defn build-req-url [line-nick station-nick]
	(str "http://127.0.0.1:8080/line/" line-nick "/station/" station-nick))


(defn station-view [station owner]
	(reify
		om/IRender
		(render [_]
			(dom/option #js {:value (:nick station)}
											  (:name station)))))

(defn change-current-station [event owner nick c-current-station]
												(put! c-current-station {:line-nick nick
																								 :station-nick (.-value (.getElementById js/document nick))})
												(.preventDefault event))


(defn network-view [line owner]
	(reify
		om/IRenderState
		(render-state [_ {:keys [current-station]}]
			(dom/div nil (:name line)
							 (dom/form #js {:onSubmit #(change-current-station % owner (:nick @line) current-station)}
									(dom/legend nil (:nick line))
									(apply dom/select #js {:id (:nick line)}
												 (om/build-all station-view (:stations line)))
									(dom/button #js {:type "submit"
																	 :style #js {:color "red"}} "Go"))))))

(defn train-view [train owner]
	(reify
		om/IRender
		(render [_]
			(let [train-data (:attrs train)]
				(dom/tr nil
					(dom/td nil (:SecondsTo train-data))
					(dom/td nil (:Destination train-data))
					(dom/td nil (:Location train-data)))))))

(defn platform-view [platform owner]
	(reify
		om/IRender
		(render [_]
			(dom/div nil
				(dom/div nil (get-in platform [:attrs :N]))
				(dom/table nil
					(dom/thead nil
						(dom/tr nil
							(dom/th nil "Time")
							(dom/th nil "Destination")
							(dom/th nil "Current Location")))
					(apply dom/tbody nil (om/build-all train-view (get-in platform [:trains]))))))))


(defn predictions-view [prediction owner]
	(reify
		om/IRenderState
		(render-state [_ {:keys [ajax-resp]}]
			(let [station-name (get-in prediction [:line :attrs :N])
						platforms (get-in prediction [:station :platforms])]
			(dom/div #js {:className "predictions"}
					(dom/div nil station-name)
							 (apply dom/ul nil
									(om/build-all platform-view platforms)))))))

(defn app-view [app owner]
	(reify
		om/IInitState
		(init-state [_]
			{:chans {:current-station (chan)
							 :ajax-resp 			(chan)}})
		om/IWillMount
		(will-mount [_]r
			(let [current-station (om/get-state owner [:chans :current-station])
						ajax-resp (om/get-state owner [:chans :ajax-resp])]
				(go (while true
							(let [cs (<! current-station)
										line-nick (:line-nick cs)
										station-nick (:station-nick cs)
										resp (<! (GETS (build-req-url line-nick station-nick)
																	  ajax-resp))]
									(do
										(om/update! app :selected-stations (reader/read-string resp))
										(println (:selected-stations @app))))))))
		om/IRenderState
		(render-state [_ {:keys [chans]}]
			(dom/div nil
				(apply dom/ul #js {:className "network"}
					(om/build-all network-view (sort-by :name (:tube-data app))
									{:init-state chans}))
				(om/build predictions-view (:selected-stations app)
									{:init-state chans})))))

(om/root
	app-view
 	state
 	{:target (.getElementById js/document "app")})
