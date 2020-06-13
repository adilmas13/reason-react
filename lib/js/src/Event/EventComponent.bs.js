'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function EventComponent(Props) {
  var match = React.useState((function () {
          return "John Doe";
        }));
  var setValue = match[1];
  var handleChange = function ($$event) {
    Curry._1(setValue, $$event.target.value);
    
  };
  return React.createElement("input", {
              type: "text",
              value: match[0],
              onChange: handleChange
            });
}

var make = EventComponent;

exports.make = make;
/* react Not a pure module */
