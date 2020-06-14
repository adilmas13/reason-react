'use strict';

var React = require("react");

function ComponentWithProps(Props) {
  var name = Props.name;
  var age = Props.age;
  return React.createElement("div", undefined, React.createElement("div", undefined, "Inside Child component (ComponentWithProps)"), React.createElement("div", undefined, "Name : " + name), React.createElement("div", undefined, "Age : " + age));
}

var make = ComponentWithProps;

exports.make = make;
/* react Not a pure module */
