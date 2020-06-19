'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");

function Header(Props) {
  var match = React.useState((function () {
          return "Introduction";
        }));
  var setTitle = match[1];
  React.useEffect((function () {
          var token = ReasonReactRouter.watchUrl((function (url) {
                  var match = url.hash;
                  switch (match) {
                    case "/child-parent-communication" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ParentComponent";
                                    }));
                    case "/component-with-children" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ComponentWithChildren";
                                    }));
                    case "/conditional-rendering" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ConditionalRenderingComponents";
                                    }));
                    case "/effect" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ReactEffects";
                                    }));
                    case "/error-boundry" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ErrorBoundry";
                                    }));
                    case "/events" :
                        return Curry._1(setTitle, (function (param) {
                                      return "EventComponent";
                                    }));
                    case "/fragment" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ReactFragment";
                                    }));
                    case "/introduction" :
                        return Curry._1(setTitle, (function (param) {
                                      return "Introduction";
                                    }));
                    case "/json" :
                        return Curry._1(setTitle, (function (param) {
                                      return "JsonComponent";
                                    }));
                    case "/list-rendering" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ListRendering";
                                    }));
                    case "/reducers" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ReactReducers";
                                    }));
                    case "/refs" :
                        return Curry._1(setTitle, (function (param) {
                                      return "RefsComponent";
                                    }));
                    case "/rest-api" :
                        return Curry._1(setTitle, (function (param) {
                                      return "RestApi";
                                    }));
                    case "/simple-component" :
                        return Curry._1(setTitle, (function (param) {
                                      return "SimpleComponent";
                                    }));
                    case "/simple-component-with-props" :
                        return Curry._1(setTitle, (function (param) {
                                      return "SimpleComponentWithProps";
                                    }));
                    case "/state" :
                        return Curry._1(setTitle, (function (param) {
                                      return "ReactState";
                                    }));
                    case "/styling" :
                        return Curry._1(setTitle, (function (param) {
                                      return "StyledComponent";
                                    }));
                    default:
                      return Curry._1(setTitle, (function (param) {
                                    return "Home";
                                  }));
                  }
                }));
          return (function (param) {
                    return ReasonReactRouter.unwatchUrl(token);
                  });
        }), ([]));
  var headerStyle = {
    backgroundColor: "#48a9dc",
    color: "#fff",
    display: "flex",
    fontSize: "20px",
    fontWeight: "500",
    height: "70px",
    paddingLeft: "20px",
    alignItems: "center"
  };
  return React.createElement("div", {
              style: headerStyle
            }, "Component Name : " + match[0]);
}

var make = Header;

exports.make = make;
/* react Not a pure module */
