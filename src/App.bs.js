'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var Home$ReasonReactExamples = require("./Home/Home.bs.js");
var Footer$ReasonReactExamples = require("./Footer/Footer.bs.js");
var Header$ReasonReactExamples = require("./Header/Header.bs.js");

function App(Props) {
  var parentWrapperHeight = {
    display: "flex",
    height: "100vh",
    flexDirection: "column"
  };
  var bodyStyle = {
    flex: "1"
  };
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  React.useEffect((function () {
          var token = ReasonReactRouter.watchUrl((function (url) {
                  console.log("Listening ...");
                  console.log(url);
                  
                }));
          return (function (param) {
                    return ReasonReactRouter.unwatchUrl(token);
                  });
        }), ([]));
  var body = function (param) {
    var match = url.path;
    var tmp;
    tmp = match ? (
        match[0] === "users" ? (
            match[1] ? React.createElement(Home$ReasonReactExamples.make, {
                    name: "Adil"
                  }) : React.createElement("div", undefined, "Users")
          ) : React.createElement(Home$ReasonReactExamples.make, {
                name: "Adil"
              })
      ) : React.createElement(Home$ReasonReactExamples.make, {
            name: "welcome"
          });
    return React.createElement("div", {
                style: bodyStyle
              }, tmp);
  };
  return React.createElement("div", {
              style: parentWrapperHeight
            }, React.createElement(Header$ReasonReactExamples.make, { }), body(undefined), React.createElement(Footer$ReasonReactExamples.make, { }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
