(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{"./node_modules/code-example/lib/clojure.js":function(n,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default='; Conway\'s Game of Life, based on the work of:\n;; Laurent Petit https://gist.github.com/1200343\n;; Christophe Grand http://clj-me.cgrand.net/2011/08/19/conways-game-of-life\n\n(ns ^{:doc "Conway\'s Game of Life."}\n game-of-life)\n\n;; Core game of life\'s algorithm functions\n\n(defn neighbours\n  "Given a cell\'s coordinates, returns the coordinates of its neighbours."\n  [[x y]]\n  (for [dx [-1 0 1] dy (if (zero? dx) [-1 1] [-1 0 1])]\n    [(+ dx x) (+ dy y)]))\n\n(defn step\n  "Given a set of living cells, computes the new set of living cells."\n  [cells]\n  (set (for [[cell n] (frequencies (mapcat neighbours cells))\n             :when (or (= n 3) (and (= n 2) (cells cell)))]\n         cell)))\n\n;; Utility methods for displaying game on a text terminal\n\n(defn print-board\n  "Prints a board on *out*, representing a step in the game."\n  [board w h]\n  (doseq [x (range (inc w)) y (range (inc h))]\n    (if (= y 0) (print "\\n"))\n    (print (if (board [x y]) "[X]" " . "))))\n\n(defn display-grids\n  "Prints a squence of boards on *out*, representing several steps."\n  [grids w h]\n  (doseq [board grids]\n    (print-board board w h)\n    (print "\\n")))\n\n;; Launches an example board\n\n(def\n  ^{:doc "board represents the initial set of living cells"}\n   board #{[2 1] [2 2] [2 3]})\n\n(display-grids (take 3 (iterate step board)) 5 5)\n\n;; Let\'s play with characters\n(println \\1 \\a \\# \\\n         \\" \\( \\newline\n         \\} \\" \\space\n         \\tab \\return \\backspace\n         \\u1000 \\uAaAa \\u9F9F)\n\n;; Let\'s play with numbers\n(+ 1 -1 1/2 -1/2 -0.5 0.5)\n\n\n'}}]);