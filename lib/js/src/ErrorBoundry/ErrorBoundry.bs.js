'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

function ErrorBoundry(Props) {
  var match = React.useState((function () {
          return "John";
        }));
  var setName = match[1];
  return React.createElement(React.Fragment, undefined, React.createElement("h3", undefined, "The Error boundry is wrapper arround the content of App.js to handle all crashes"), React.createElement("h4", undefined, "Type to cause an error, reference of the cause of error is below"), React.createElement("a", {
                  href: "https://reasonml.github.io/reason-react/docs/en/usestate-event-value",
                  target: "_blank"
                }, "https://reasonml.github.io/reason-react/docs/en/usestate-event-value"), React.createElement("br", undefined), React.createElement("br", undefined), React.createElement("input", {
                  type: "text",
                  value: match[0],
                  onChange: (function ($$event) {
                      return Curry._1(setName, (function (param) {
                                    return $$event.target.value;
                                  }));
                    })
                }));
}

var make = ErrorBoundry;

exports.make = make;
/* react Not a pure module */
