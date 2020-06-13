'use strict';

var React = require("react");

function ColorsComponent(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "Red"), React.createElement("div", undefined, "Green"), React.createElement("div", undefined, "Blue"));
}

var make = ColorsComponent;

exports.make = make;
/* react Not a pure module */
