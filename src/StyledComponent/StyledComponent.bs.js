'use strict';

var React = require("react");

function StyledComponent(Props) {
  var singleStyleObject = {
    color: "#f00",
    fontSize: "20px"
  };
  var style = {
    backgroundColor: "#bb00bb",
    color: "#fff000"
  };
  var textStyle = {
    fontSize: "40px"
  };
  var paddingStyle = {
    paddingLeft: "20px"
  };
  var multipleStyles = Object.assign(({}), singleStyleObject, Object.assign(({}), style, Object.assign(({}), paddingStyle, textStyle)));
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  style: singleStyleObject
                }, "Applying a single style here"), React.createElement("div", {
                  style: Object.assign(({}), textStyle, paddingStyle)
                }, "Applying Combined style object here"), React.createElement("div", {
                  style: multipleStyles
                }, "Applying More than two style object here"));
}

var make = StyledComponent;

exports.make = make;
/* react Not a pure module */
