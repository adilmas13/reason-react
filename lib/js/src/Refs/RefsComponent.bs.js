'use strict';

var React = require("react");

function RefsComponent(Props) {
  var match = React.useState((function () {
          return "";
        }));
  var divRef = React.useRef(null);
  var alterDiv = function (param) {
    console.log(divRef);
    
  };
  return React.createElement(React.Fragment, undefined, React.createElement("div", {
                  ref: divRef,
                  onClick: alterDiv
                }, "Click me and check console log", React.createElement("br", undefined), React.createElement("div", {
                      style: {
                        whiteSpace: "pre-wrap"
                      }
                    }, match[0])));
}

var make = RefsComponent;

exports.make = make;
/* react Not a pure module */
