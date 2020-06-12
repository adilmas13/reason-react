'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var InnerComponent$ReasonReactExamples = require("./InnerComponent.bs.js");

function App(Props) {
  Props.name;
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var count = match[0];
  var match$1 = React.useState((function () {
          return 0;
        }));
  var setAnotherCount = match$1[1];
  var anotherCount = match$1[0];
  var incrementCounter = function (param) {
    return Curry._1(setCount, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  var decrementCounter = function (param) {
    return Curry._1(setAnotherCount, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  React.useEffect((function () {
          console.log("EFFECT one");
          return (function (param) {
                    console.log("Something");
                    
                  });
        }), /* tuple */[
        count,
        anotherCount
      ]);
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: incrementCounter
                }, "Increament"), React.createElement("button", {
                  onClick: decrementCounter
                }, "Decrement"), React.createElement("button", undefined, "Clicked"), React.createElement(InnerComponent$ReasonReactExamples.make, {
                  children: null
                }, React.createElement("div", undefined, "This is a child component"), React.createElement("div", undefined, "Count => " + String(count)), React.createElement("div", undefined, "Another Count => " + String(anotherCount))));
}

var make = App;

exports.make = make;
/* react Not a pure module */
