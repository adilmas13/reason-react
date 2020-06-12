'use strict';

var React = require("react");

function StyledComponent(Props) {
  var singleStyleObject = {
    color: "#f00"
  };
  var style = {
    backgroundColor: "#ff00ff",
    color: "#fff000"
  };
  var textStyle = {
    fontSize: "40px"
  };
  return React.createElement(React.Fragment, undefined, React.createElement("h3", undefined, "Styled Component"), React.createElement("div", {
                  style: singleStyleObject
                }, "Single Styled object"), React.createElement("div", {
                  style: Object.assign(({}), textStyle, style)
                }, "Applying Combined style object"));
}

var make = StyledComponent;

exports.make = make;
/* react Not a pure module */
