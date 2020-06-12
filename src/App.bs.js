'use strict';

var React = require("react");
var InnerComponent$ReasonReactExamples = require("./InnerComponent.bs.js");

function App(Props) {
  var name = Props.name;
  return React.createElement("div", undefined, React.createElement("button", undefined, "Hello " + (name + "!")), React.createElement(InnerComponent$ReasonReactExamples.make, {
                  children: React.createElement("div", undefined, "This is a child component")
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
