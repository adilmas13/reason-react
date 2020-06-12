'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var Home$ReasonReactExamples = require("./Home/Home.bs.js");

function App(Props) {
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  console.log(url);
  var match = url.path;
  if (match) {
    if (match[0] === "users") {
      if (match[1]) {
        return React.createElement(Home$ReasonReactExamples.make, {
                    name: "Adil"
                  });
      } else {
        return React.createElement("div", undefined, "Users");
      }
    } else {
      return React.createElement(Home$ReasonReactExamples.make, {
                  name: "Adil"
                });
    }
  } else {
    return React.createElement(Home$ReasonReactExamples.make, {
                name: "welcome"
              });
  }
}

var make = App;

exports.make = make;
/* react Not a pure module */
