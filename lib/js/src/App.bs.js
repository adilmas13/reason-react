'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var Home$ReasonReactExamples = require("./Home/Home.bs.js");
var ReasonReactErrorBoundary = require("reason-react/src/ReasonReactErrorBoundary.bs.js");
var Footer$ReasonReactExamples = require("./Footer/Footer.bs.js");
var Header$ReasonReactExamples = require("./Header/Header.bs.js");
var RefsComponent$ReasonReactExamples = require("./Refs/RefsComponent.bs.js");
var EventComponent$ReasonReactExamples = require("./Event/EventComponent.bs.js");

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
    var exit = 0;
    if (match) {
      switch (match[0]) {
        case "events" :
            if (match[1]) {
              exit = 1;
            } else {
              tmp = React.createElement(EventComponent$ReasonReactExamples.make, { });
            }
            break;
        case "refs" :
            if (match[1]) {
              exit = 1;
            } else {
              tmp = React.createElement(RefsComponent$ReasonReactExamples.make, { });
            }
            break;
        case "users" :
            if (match[1]) {
              exit = 1;
            } else {
              tmp = React.createElement("div", undefined, "Users");
            }
            break;
        default:
          exit = 1;
      }
    } else {
      tmp = React.createElement(Home$ReasonReactExamples.make, {
            name: "welcome"
          });
    }
    if (exit === 1) {
      tmp = React.createElement(Home$ReasonReactExamples.make, {
            name: "Adil"
          });
    }
    return React.createElement("div", {
                style: bodyStyle
              }, tmp);
  };
  return React.createElement(ReasonReactErrorBoundary.make, {
              children: React.createElement("div", {
                    style: parentWrapperHeight
                  }, React.createElement(Header$ReasonReactExamples.make, { }), body(undefined), React.createElement(Footer$ReasonReactExamples.make, { })),
              fallback: (function (param) {
                  return "An error occured";
                })
            });
}

var make = App;

exports.make = make;
/* react Not a pure module */
