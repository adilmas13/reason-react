'use strict';

var React = require("react");

function AnimalsComponent(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("div", undefined, "Cat"), React.createElement("div", undefined, "Dog"), React.createElement("div", undefined, "Rat"));
}

var make = AnimalsComponent;

exports.make = make;
/* react Not a pure module */
