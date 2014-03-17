(ns om-tube-tracker.core
(:require-macros [cljs.core.async.macros :refer [go]])
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [cljs.core.async :as async :refer [put! chan <! sliding-buffer]]
						[om-tube-tracker.utils :refer [resp-text]]))

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
									:selected-stations ["Testin"]}))

(defn station-view [station owner]
	(reify
		om/IRender
		(render [_]
			(dom/option #js {:value (:name station)
											 :data-test (:selected station)} (:name station)))))

(defn change-current-station [event owner nick c-current-station]
												(put! c-current-station (.-value (.getElementById js/document nick)))
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

(defn predictions-view [prediction owner]
	(reify
		om/IRender
		(render [_]
			(dom/div #js {:className "predictions"}
				(dom/ul nil (first prediction))))))

(defn app-view [app owner]
	(reify
		om/IInitState
		(init-state [_]
			{:chans {:current-station (chan)}})
		om/IWillMount
		(will-mount [_]
			(let [current-station (om/get-state owner [:chans :current-station])]
				(go (while true
							(let [cs (<! current-station)]
								(om/update! app :selected-stations (conj [] cs)))))))
		om/IRenderState
		(render-state [_ {:keys [chans]}]
			(dom/div nil
				(apply dom/ul #js {:className "network"}
					(om/build-all network-view (sort-by :name (:tube-data app))
									{:init-state chans}))
				(om/build predictions-view (:selected-stations app))
				))))

(om/root
	app-view
 	state
 	{:target (.getElementById js/document "app")})
