(ns om-tube-tracker.core
(:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :refer [put! chan <!]]))
(enable-console-print!)

(js/alert #(str (chan)))
(def js-data (js->clj js/data :keywordize-keys true))


(def data (into [] (for [[k v] (:lines js-data)]
											{:name v
													:nick (name k)
													:stations (map
																		 #(hash-map :nick %
																			 :name ((keyword %) (:stations js-data))
																			 :selected false)
																		 (k (:stationsOnLines js-data)))})))

(def state (atom data))

(defn station-view [station owner]
	(reify
		om/IRender
		(render [_]
			(dom/option #js {:value (:name station)
											 :data-test (:selected station)} (:name station)))))

(defn network-view [line owner]
	(reify
		om/IRender
		(render [_]
			(dom/div nil (:name line)
							 (dom/form #js {:onSubmit #(js/alert "alert")}
									(dom/legend nil (:nick line))
									(apply dom/select nil
												 (om/build-all station-view (:stations line)))
									(dom/button #js {:type "submit" :style #js {:color "red"}} "Go"))))))
												 ;;(map #(dom/option #js {:value (:name %)} (:name %)) (:stations line))))))))

(defn app-view [app owner]
	(reify
		om/IRender
		(render [_]
			(apply dom/ul #js {:className "network"}
				(om/build-all network-view app)))))

(om/root
	app-view
 	state
 	{:target (.getElementById js/document "app")})
