'use strict';

var React = require("react");

function PlacesComponent(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "Paris"), React.createElement("div", undefined, "Italy"), React.createElement("div", undefined, "Singapore"));
}

var make = PlacesComponent;

exports.make = make;
/* react Not a pure module */
