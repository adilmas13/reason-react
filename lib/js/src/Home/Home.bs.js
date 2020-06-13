'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");
var InnerComponent$ReasonReactExamples = require("../InnerComponent/InnerComponent.bs.js");
var StyledComponent$ReasonReactExamples = require("../StyledComponent/StyledComponent.bs.js");

function Home(Props) {
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
  var redirect = function (param) {
    return ReasonReactRouter.replace("users");
  };
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: redirect
                }, "Redirect"), React.createElement("h3", undefined, "App Component"), React.createElement("div", undefined, "Welcome " + name), React.createElement("div", undefined, visibile ? "Inner component isVisible" : "Inner component is Gone"), React.createElement("button", {
                  onClick: timeToDestroy
                }, "DESTROY Inner Component"), visibile ? React.createElement(InnerComponent$ReasonReactExamples.make, {
                    children: null
                  }, React.createElement("div", {
                        key: "1"
                      }, "This is a child1 component"), React.createElement("div", {
                        key: "2"
                      }, "This is a child2 component")) : null, React.createElement(StyledComponent$ReasonReactExamples.make, { }));
}

var make = Home;

exports.make = make;
/* react Not a pure module */
