'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var InnerComponent$ReasonReactExamples = require("./InnerComponent.bs.js");

function App(Props) {
  Props.name;
  var match = React.useState((function () {
          return true;
        }));
  var setVisible = match[1];
  var visibile = match[0];
  var timeToDestroy = function (param) {
    console.log("Calling destroy .....");
    return Curry._1(setVisible, (function (visibility) {
                  return !visibility;
                }));
  };
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: timeToDestroy
                }, "DESTROY"), visibile ? React.createElement(InnerComponent$ReasonReactExamples.make, {
                    children: React.createElement("div", undefined, "This is a child component")
                  }) : React.createElement("div", undefined, "OK"), React.createElement("div", undefined, visibile ? "isVisible" : "Gone"));
}

var make = App;

exports.make = make;
/* react Not a pure module */
