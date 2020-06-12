'use strict';

var React = require("react");

function InnerComponent(Props) {
  var children = Props.children;
  return React.createElement("div", undefined, "Hello world", children);
}

var make = InnerComponent;

exports.make = make;
/* react Not a pure module */
