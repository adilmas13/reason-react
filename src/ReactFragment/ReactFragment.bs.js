'use strict';

var React = require("react");

function ReactFragment(Props) {
  return React.createElement(React.Fragment, undefined, React.createElement("h4", undefined, "To avoid wrapping a component content in an extra div, we can use React Fragment <> content </>"), React.createElement("div", undefined, "This component's content is wrapped inside a React Fragment."));
}

var make = ReactFragment;

exports.make = make;
/* react Not a pure module */
