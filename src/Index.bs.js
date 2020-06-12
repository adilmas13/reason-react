'use strict';

var React = require("react");
var ReactDOMRe = require("reason-react/src/legacy/ReactDOMRe.bs.js");
var Greeting$ReasonReactExamples = require("./Greeting.bs.js");

ReactDOMRe.renderToElementWithId(React.createElement(Greeting$ReasonReactExamples.make, {
          name: "John"
        }), "root");

/*  Not a pure module */
