'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function ReactState(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setCounter1 = match[1];
  var match$1 = React.useState((function () {
          return 0;
        }));
  var setCounter2 = match$1[1];
  var match$2 = React.useState((function () {
          return 0;
        }));
  var setCounter3 = match$2[1];
  var incrementCounter1 = function (param) {
    return Curry._1(setCounter1, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  var incrementCounter2 = function (param) {
    return Curry._1(setCounter2, (function (prevCount) {
                  return prevCount + 1 | 0;
                }));
  };
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: incrementCounter1
                }, "Update Counter 1"), React.createElement("div", undefined, "Counter 1 => " + String(match[0])), React.createElement("br", undefined), React.createElement("button", {
                  onClick: incrementCounter2
                }, "Update Counter 2  "), React.createElement("div", undefined, "Counter 2 => " + String(match$1[0])), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("div", undefined, "-------- Conditional State Change using same function -----"), React.createElement("br", undefined), React.createElement("button", {
                  onClick: (function (__x) {
                      return Curry._1(setCounter3, (function (prevCount) {
                                    return prevCount + 1 | 0;
                                  }));
                    })
                }, "Increment Counter 3"), React.createElement("button", {
                  onClick: (function (__x) {
                      return Curry._1(setCounter3, (function (prevCount) {
                                    return prevCount - 1 | 0;
                                  }));
                    })
                }, "Decrement Counter 3"), React.createElement("div", undefined, "Counter 3 => " + String(match$2[0])));
}

var make = ReactState;

exports.make = make;
/* react Not a pure module */
