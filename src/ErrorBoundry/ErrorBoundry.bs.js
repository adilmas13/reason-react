'use strict';

var React = require("react");

function ErrorBoundry(Props) {
  return React.createElement("div", undefined, "Error Boundry");
}

var make = ErrorBoundry;

exports.make = make;
/* react Not a pure module */
