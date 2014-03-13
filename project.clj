(defproject om-tube-tracker "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
				 [org.clojure/clojurescript "0.0-2173"]
				 [om "0.5.2"]
				 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]

  :plugins [[lein-cljsbuild "1.0.2"]]
  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]

  :cljsbuild {
	:builds [{:id "dev"
			  :source-paths ["src/clj" "src/cljs"]
			  :compiler {
						 :output-to "resources/public/js/main.js"
						 :output-dir "resources/public/js/out"
						 :optimizations :none
						 :source-map true}}]})
