'use strict';

var React = require("react");
var ComponentWithProps$ReasonReactExamples = require("./ComponentWithProps.bs.js");

function SimpleComponentWithProps(Props) {
  return React.createElement("div", undefined, React.createElement("div", undefined, "Simple ReasonReact Component With Props"), React.createElement("div", undefined, "Passing John Doe and 30 to child component as props"), React.createElement(ComponentWithProps$ReasonReactExamples.make, {
                  name: "John Doe",
                  age: "30"
                }));
}

var make = SimpleComponentWithProps;

exports.make = make;
/* react Not a pure module */
