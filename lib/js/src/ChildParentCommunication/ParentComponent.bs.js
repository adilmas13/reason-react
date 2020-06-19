'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ChildComponent$ReasonReactExamples = require("./ChildComponent.bs.js");

function ParentComponent(Props) {
  var match = React.useState((function () {
          return "Awaiting message from child";
        }));
  var setMessage = match[1];
  var handleChildCallback = function (value) {
    return Curry._1(setMessage, (function (param) {
                  return "Message from child " + String(value);
                }));
  };
  return React.createElement(React.Fragment, undefined, React.createElement("h4", undefined, "Im the Parent"), React.createElement("div", undefined, match[0]), React.createElement(ChildComponent$ReasonReactExamples.make, {
                  callback: handleChildCallback
                }));
}

var make = ParentComponent;

exports.make = make;
/* react Not a pure module */
