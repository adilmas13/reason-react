'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");

function Header(Props) {
  var match = React.useState((function () {
          return "Home";
        }));
  var setTitle = match[1];
  React.useEffect((function () {
          var token = ReasonReactRouter.watchUrl((function (url) {
                  var match = url.path;
                  if (!match) {
                    return Curry._1(setTitle, (function (param) {
                                  return "Home";
                                }));
                  }
                  switch (match[0]) {
                    case "component-with-children" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "ComponentWithChildren";
                                      }));
                        }
                    case "conditional-rendering" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "ConditionalRenderingComponents";
                                      }));
                        }
                    case "effect" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "ReactEffects";
                                      }));
                        }
                    case "events" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "EventComponent";
                                      }));
                        }
                    case "fragment" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "ReactFragment";
                                      }));
                        }
                    case "list-rendering" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "ListRendering";
                                      }));
                        }
                    case "refs" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "RefsComponent";
                                      }));
                        }
                    case "simple-component" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "SimpleComponent";
                                      }));
                        }
                    case "simple-component-with-props" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "SimpleComponentWithProps";
                                      }));
                        }
                    case "state" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "ReactState";
                                      }));
                        }
                    case "styling" :
                        if (match[1]) {
                          return Curry._1(setTitle, (function (param) {
                                        return "Home";
                                      }));
                        } else {
                          return Curry._1(setTitle, (function (param) {
                                        return "StyledComponent";
                                      }));
                        }
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
