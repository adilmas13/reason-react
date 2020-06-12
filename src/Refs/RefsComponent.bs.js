'use strict';

var React = require("react");

function RefsComponent(Props) {
  var divRef = React.useRef(null);
  var alterDiv = function (param) {
    console.log(divRef.current);
    
  };
  return React.createElement("div", {
              ref: divRef,
              onClick: alterDiv
            }, "Click me and check log");
}

var make = RefsComponent;

exports.make = make;
/* react Not a pure module */
