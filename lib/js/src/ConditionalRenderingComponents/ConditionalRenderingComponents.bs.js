'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ColorsComponent$ReasonReactExamples = require("./ColorsComponent.bs.js");
var PlacesComponent$ReasonReactExamples = require("./PlacesComponent.bs.js");
var AnimalsComponent$ReasonReactExamples = require("./AnimalsComponent.bs.js");

function ConditionalRenderingComponents(Props) {
  var match = React.useState((function () {
          return /* ANIMAL */0;
        }));
  var setCurrentComponent = match[1];
  var tmp;
  switch (match[0]) {
    case /* ANIMAL */0 :
        tmp = React.createElement(AnimalsComponent$ReasonReactExamples.make, { });
        break;
    case /* PlACES */1 :
        tmp = React.createElement(PlacesComponent$ReasonReactExamples.make, { });
        break;
    case /* COLORS */2 :
        tmp = React.createElement(ColorsComponent$ReasonReactExamples.make, { });
        break;
    
  }
  return React.createElement("div", undefined, React.createElement("button", {
                  onClick: (function (__x) {
                      return Curry._1(setCurrentComponent, (function (param) {
                                    return /* COLORS */2;
                                  }));
                    })
                }, "Color"), React.createElement("button", {
                  onClick: (function (__x) {
                      return Curry._1(setCurrentComponent, (function (param) {
                                    return /* ANIMAL */0;
                                  }));
                    })
                }, "Animals"), React.createElement("button", {
                  onClick: (function (__x) {
                      return Curry._1(setCurrentComponent, (function (param) {
                                    return /* PlACES */1;
                                  }));
                    })
                }, "Places"), React.createElement("br", undefined), tmp);
}

var make = ConditionalRenderingComponents;

exports.make = make;
/* react Not a pure module */
