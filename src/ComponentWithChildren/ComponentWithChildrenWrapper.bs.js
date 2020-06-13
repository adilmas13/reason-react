'use strict';

var React = require("react");

function ComponentWithChildrenWrapper(Props) {
  var children = Props.children;
  return React.createElement("div", undefined, React.createElement("div", undefined, "----> Container starts Here <----"), children, React.createElement("div", undefined, "----> Container closes Here <----"));
}

var make = ComponentWithChildrenWrapper;

exports.make = make;
/* react Not a pure module */
