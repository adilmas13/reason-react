'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");

function References(Props) {
  var match = React.useState((function () {
          return ["https://github.com/adilmas13/reason-react"];
        }));
  var setReferences = match[1];
  React.useEffect((function () {
          var token = ReasonReactRouter.watchUrl((function (url) {
                  var match = url.hash;
                  switch (match) {
                    case "component-with-children" :
                        var references = [
                          "https://reasonml.github.io/reason-react/docs/en/jsx#children",
                          "https://reasonml.github.io/reason-react/docs/en/components#a-note-on-children",
                          "https://reasonml.github.io/reason-react/docs/en/render-props"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references;
                                    }));
                    case "conditional-rendering" :
                        var references$1 = [
                          "https://gist.github.com/jack-lewin/badd7710d8cc850eb25c79c7891ccdd5",
                          "https://reasonml.chat/t/how-do-i-conditionally-display-an-element-in-reason-react/1660",
                          "https://reactjs.org/docs/conditional-rendering.html"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$1;
                                    }));
                    case "effect" :
                        var references$2 = [
                          "https://reasonml.github.io/reason-react/docs/en/useeffect-hook",
                          "https://reasonml.github.io/reason-react/docs/en/use-state-use-effect",
                          "https://reasonml.github.io/reason-react/docs/en/components#hooks",
                          "https://reactjs.org/docs/hooks-effect.html",
                          "https://medium.com/jalgos/hooks-in-reasonml-an-introduction-1eac6ed32314"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$2;
                                    }));
                    case "error-boundry" :
                        var references$3 = [
                          "https://reasonml.github.io/reason-react/docs/en/error-boundaries",
                          "https://reactjs.org/docs/error-boundaries.html"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$3;
                                    }));
                    case "events" :
                        var references$4 = [
                          "https://reasonml.github.io/reason-react/docs/en/usestate-event-value",
                          "https://reasonml.github.io/reason-react/docs/en/event"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$4;
                                    }));
                    case "fragment" :
                        var references$5 = [
                          "https://reasonml.github.io/reason-react/docs/en/jsx#fragment",
                          "https://reactjs.org/docs/fragments.html"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$5;
                                    }));
                    case "introduction" :
                        var references$6 = ["https://github.com/adilmas13/reason-react"];
                        return Curry._1(setReferences, (function (param) {
                                      return references$6;
                                    }));
                    case "json" :
                        var references$7 = [];
                        return Curry._1(setReferences, (function (param) {
                                      return references$7;
                                    }));
                    case "list-rendering" :
                        var references$8 = ["https://reasonml.github.io/reason-react/docs/en/simple"];
                        return Curry._1(setReferences, (function (param) {
                                      return references$8;
                                    }));
                    case "refs" :
                        var references$9 = ["https://reasonml.github.io/reason-react/docs/en/refs"];
                        return Curry._1(setReferences, (function (param) {
                                      return references$9;
                                    }));
                    case "rest-api" :
                        var references$10 = [];
                        return Curry._1(setReferences, (function (param) {
                                      return references$10;
                                    }));
                    case "simple-component" :
                        var references$11 = [
                          "https://reasonml.github.io/reason-react/docs/en/components#a-note-on-children",
                          "https://reactjs.org/docs/react-component.html"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$11;
                                    }));
                    case "simple-component-with-props" :
                        var references$12 = [
                          "https://reasonml.github.io/reason-react/docs/en/components#a-note-on-children",
                          "https://reasonml.github.io/reason-react/docs/en/render-props"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$12;
                                    }));
                    case "state" :
                        var references$13 = [
                          "https://reasonml.github.io/reason-react/docs/en/usestate-hook",
                          "https://reactjs.org/docs/hooks-state.html",
                          "https://reasonml.github.io/reason-react/docs/en/use-state-use-effect",
                          "https://medium.com/jalgos/hooks-in-reasonml-an-introduction-1eac6ed32314"
                        ];
                        return Curry._1(setReferences, (function (param) {
                                      return references$13;
                                    }));
                    case "styling" :
                        var references$14 = ["https://reasonml.github.io/reason-react/docs/en/style"];
                        return Curry._1(setReferences, (function (param) {
                                      return references$14;
                                    }));
                    default:
                      var references$15 = [];
                      return Curry._1(setReferences, (function (param) {
                                    return references$15;
                                  }));
                  }
                }));
          return (function (param) {
                    return ReasonReactRouter.unwatchUrl(token);
                  });
        }), ([]));
  var parentStyle = {
    backgroundColor: "#48a9dc",
    color: "#fff",
    display: "flex",
    fontSize: "20px",
    fontWeight: "500",
    minHeight: "150px",
    paddingTop: "10px",
    paddingLeft: "20px",
    flexDirection: "column"
  };
  var linkStyle = {
    color: "#fff",
    fontSize: "14px"
  };
  return React.createElement("div", {
              style: parentStyle
            }, React.createElement("div", {
                  style: {
                    fontSize: "16px"
                  }
                }, "References"), React.createElement("ul", {
                  style: {
                    marginTop: "5px"
                  }
                }, Belt_Array.map(match[0], (function (item) {
                        return React.createElement("li", {
                                    key: item
                                  }, React.createElement("a", {
                                        style: linkStyle,
                                        href: item,
                                        target: "_blank"
                                      }, item));
                      }))));
}

var make = References;

exports.make = make;
/* react Not a pure module */
