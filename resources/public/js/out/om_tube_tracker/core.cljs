(ns om-tube-tracker.core
	(:require [om.core :as om :include-macros true]
						[om.dom :as dom :include-macros true]))

(enable-console-print!)

(def js-data (js->clj js/data :keywordize-keys true))

(def data (into [] (for [[k v] (:lines js-data)]
											{:name v
													:nick (name k)
													:stations (map
																		 #(hash-map :nick %
																			 :name ((keyword %) (:stations js-data)))
																		 (k (:stationsOnLines js-data)))})))

(def state (atom data))

(defn station-view [station owner]
	(reify
		om/IRender
		(render [_]
			(dom/div nil (:name station)))))

(defn network-view [line owner]
	(reify
		om/IRender
		(render [_]
			(dom/div nil (:name line)
							 (apply dom/ul nil
											(om/build-all station-view (:stations line)))))))

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
