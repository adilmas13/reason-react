'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function EventComponent(Props) {
  var match = React.useState((function () {
          return "John Doe";
        }));
  var setValue = match[1];
  var value = match[0];
  var match$1 = React.useState((function () {
          return false;
        }));
  var setClicked = match$1[1];
  var handleChange = function ($$event) {
    Curry._1(setValue, $$event.target.value);
    
  };
  var handleClick = function ($$event) {
    console.log($$event.target);
    Curry._1(setClicked, (function (param) {
            return true;
          }));
    
  };
  return React.createElement(React.Fragment, undefined, React.createElement("button", {
                  onClick: handleClick
                }, "Click me"), match$1[0] ? React.createElement("div", undefined, "Clicked") : null, React.createElement("br", undefined), React.createElement("input", {
                  type: "text",
                  value: value,
                  onChange: handleChange
                }), React.createElement("div", undefined, value));
}

var make = EventComponent;

exports.make = make;
/* react Not a pure module */
