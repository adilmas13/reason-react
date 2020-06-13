'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function ReactEffects(Props) {
  var match = React.useState((function () {
          return 0;
        }));
  var setCounter1 = match[1];
  var counter1 = match[0];
  var match$1 = React.useState((function () {
          return 0;
        }));
  var setCounter2 = match$1[1];
  var counter2 = match$1[0];
  var match$2 = React.useState((function () {
          return "";
        }));
  var setInfo = match$2[1];
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
  var updateInfo = function (info) {
    return Curry._1(setInfo, (function (prevInfo) {
                  return prevInfo + (info + "\n");
                }));
  };
  React.useEffect((function () {
          console.log("Called due to change in some state");
          return (function (param) {
                    console.log("After Effect 1");
                    
                  });
        }));
  React.useEffect((function () {
          updateInfo("Side Effect of Counter 1");
          return (function (param) {
                    console.log("After Effect 2");
                    
                  });
        }), [counter1]);
  React.useEffect((function () {
          updateInfo("Side Effect of Counter 2");
          return (function (param) {
                    console.log("After Effect 3");
                    
                  });
        }), [counter2]);
  React.useEffect((function () {
          updateInfo("This effect is called only once during first render");
          return (function (param) {
                    console.log("After Effect 4");
                    
                  });
        }), ([]));
  return React.createElement("div", undefined, React.createElement("h4", undefined, "Demo shows which effect is called as a result of a change in a state/render"), React.createElement("h4", undefined, "All effects are called atleast once due to the initial render of the component"), React.createElement("h4", undefined, "Check code for different implementations of effects"), React.createElement("button", {
                  onClick: incrementCounter1
                }, "Update Counter 1"), React.createElement("button", {
                  onClick: incrementCounter2
                }, "Update Counter 2  "), React.createElement("div", undefined, "Count => " + String(counter1)), React.createElement("div", undefined, "Another Count => " + String(counter2)), React.createElement("br", undefined), React.createElement("div", {
                  style: {
                    border: "1px solid black",
                    display: "inline-block",
                    padding: "0px 10px 10px",
                    whiteSpace: "pre-wrap"
                  }
                }, React.createElement("h3", undefined, "----- Effect Log -----"), match$2[0]));
}

var make = ReactEffects;

exports.make = make;
/* react Not a pure module */
