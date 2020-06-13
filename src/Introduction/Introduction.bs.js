'use strict';

var React = require("react");

function Introduction(Props) {
  return React.createElement("h1", undefined, "Introduction");
}

var make = Introduction;

exports.make = make;
/* react Not a pure module */
