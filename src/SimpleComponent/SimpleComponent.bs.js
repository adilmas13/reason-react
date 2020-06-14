'use strict';

var React = require("react");

function SimpleComponent(Props) {
  return React.createElement("div", undefined, "Simple ReasonReact Component");
}

var make = SimpleComponent;

exports.make = make;
/* react Not a pure module */
