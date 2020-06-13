'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function InnerComponent(Props) {
  var children = Props.children;
  console.log(children);
  var match = React.useState((function () {
          return 0;
        }));
  var setCount = match[1];
  var count = match[0];
  var match$1 = React.useState((function () {
          return 0;
        }));
  var setAnotherCount = match$1[1];
  var incrementCounter1 = function (param) {
    return Curry._1(setCount, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  var incrementCounter2 = function (param) {
    return Curry._1(setAnotherCount, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  React.useEffect((function () {
          console.log("Called");
          return (function (param) {
                    console.log("Something");
                    
                  });
        }));
  React.useEffect((function () {
          console.log("Count EFFECT");
          return (function (param) {
                    console.log("Something");
                    
                  });
        }), [count]);
  React.useEffect((function () {
          console.log("Called only once");
          return (function (param) {
                    console.log("Something");
                    
                  });
        }), ([]));
  return React.createElement(React.Fragment, undefined, React.createElement("h3", undefined, "Inner Component"), React.createElement("button", {
                  onClick: incrementCounter1
                }, "Update Counter 1"), React.createElement("button", {
                  onClick: incrementCounter2
                }, "Update Counter 2  "), React.createElement("div", undefined, "Count => " + String(count)), React.createElement("div", undefined, "Another Count => " + String(match$1[0])), React.createElement("div", undefined, "Hello world", children));
}

var make = InnerComponent;

exports.make = make;
/* react Not a pure module */
