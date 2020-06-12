'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var InnerComponent$ReasonReactExamples = require("./InnerComponent/InnerComponent.bs.js");
var StyledComponent$ReasonReactExamples = require("./StyledComponent/StyledComponent.bs.js");

function App(Props) {
  var name = Props.name;
  var match = React.useState((function () {
          return true;
        }));
  var setVisible = match[1];
  var visibile = match[0];
  var timeToDestroy = function (param) {
    console.log("Calling destroy .....");
    return Curry._1(setVisible, (function (visibility) {
                  return !visibility;
                }));
  };
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: timeToDestroy
                }, "DESTROY"), React.createElement("div", undefined, "Welcome " + name), visibile ? React.createElement(InnerComponent$ReasonReactExamples.make, {
                    children: null
                  }, React.createElement("div", {
                        key: "1"
                      }, "This is a child1 component"), React.createElement("div", {
                        key: "2"
                      }, "This is a child2 component")) : React.createElement("div", undefined, "OK"), React.createElement("div", undefined, visibile ? "isVisible" : "Gone"), React.createElement(StyledComponent$ReasonReactExamples.make, { }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
