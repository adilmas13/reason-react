'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");
var Home$ReasonReactExamples = require("./Home/Home.bs.js");
var ReasonReactErrorBoundary = require("reason-react/lib/js/src/ReasonReactErrorBoundary.bs.js");
var Header$ReasonReactExamples = require("./Header/Header.bs.js");
var RefsComponent$ReasonReactExamples = require("./Refs/RefsComponent.bs.js");
var EventComponent$ReasonReactExamples = require("./Event/EventComponent.bs.js");
var NavigationPanel$ReasonReactExamples = require("./NavigationPanel/NavigationPanel.bs.js");
var SimpleComponent$ReasonReactExamples = require("./SimpleComponent/SimpleComponent.bs.js");
var StyledComponent$ReasonReactExamples = require("./StyledComponent/StyledComponent.bs.js");

function App(Props) {
  var parentStyle = {
    display: "flex",
    height: "100vh"
  };
  var bodyStyle = {
    padding: "20px",
    flex: "1",
    boxSizing: "border-box"
  };
  var bodyWrapperStyle = {
    display: "flex",
    flex: "1",
    flexDirection: "column"
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
        case "simple-component" :
            if (match[1]) {
              exit = 1;
            } else {
              tmp = React.createElement(SimpleComponent$ReasonReactExamples.make, { });
            }
            break;
        case "styling" :
            if (match[1]) {
              exit = 1;
            } else {
              tmp = React.createElement(StyledComponent$ReasonReactExamples.make, { });
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
                    style: parentStyle
                  }, React.createElement(NavigationPanel$ReasonReactExamples.make, { }), React.createElement("div", {
                        style: bodyWrapperStyle
                      }, React.createElement(Header$ReasonReactExamples.make, { }), body(undefined))),
              fallback: (function (param) {
                  return "An error occured";
                })
            });
}

var make = App;

exports.make = make;
/* react Not a pure module */
