'use strict';

var React = require("react");
var NavLogo$ReasonReactExamples = require("./NavLogo.bs.js");

function NavigationPanel(Props) {
  var parentStyle = {
    backgroundColor: "#db4d3f",
    display: "flex",
    width: "300px",
    flexDirection: "column"
  };
  return React.createElement("div", {
              style: parentStyle
            }, React.createElement(NavLogo$ReasonReactExamples.make, { }));
}

var make = NavigationPanel;

exports.make = make;
/* react Not a pure module */
