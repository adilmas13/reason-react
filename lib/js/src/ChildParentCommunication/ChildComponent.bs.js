'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var count = {
  contents: 0
};

function ChildComponent(Props) {
  var callback = Props.callback;
  var sendToParent = function (param) {
    count.contents = count.contents + 1 | 0;
    return Curry._1(callback, count.contents);
  };
  return React.createElement(React.Fragment, undefined, React.createElement("br", undefined), React.createElement("div", undefined, "---- Start of Child Component ----"), React.createElement("button", {
                  onClick: sendToParent
                }, "Send to parent"), React.createElement("div", undefined, "---- End of Child Component ----"));
}

var make = ChildComponent;

exports.count = count;
exports.make = make;
/* react Not a pure module */
