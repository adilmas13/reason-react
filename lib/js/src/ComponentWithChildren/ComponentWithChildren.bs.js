'use strict';

var React = require("react");
var ComponentWithChildrenWrapper$ReasonReactExamples = require("./ComponentWithChildrenWrapper.bs.js");

function ComponentWithChildren(Props) {
  return React.createElement("div", undefined, React.createElement(ComponentWithChildrenWrapper$ReasonReactExamples.make, {
                  children: React.createElement("div", undefined, "I am a child")
                }), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement(ComponentWithChildrenWrapper$ReasonReactExamples.make, {
                  children: null
                }, React.createElement("div", undefined, "I am a child"), React.createElement("div", undefined, "I am a child 1")), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement(ComponentWithChildrenWrapper$ReasonReactExamples.make, {
                  children: null
                }, React.createElement("div", undefined, "I am a child"), React.createElement("div", undefined, "I am a child 1"), React.createElement("div", undefined, "I am a child 2")));
}

var make = ComponentWithChildren;

exports.make = make;
/* react Not a pure module */
