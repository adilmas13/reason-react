'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");
var NavLogo$ReasonReactExamples = require("./NavLogo.bs.js");

function NavigationPanel(Props) {
  var links = [
    {
      id: "introduction",
      title: "Introduction",
      href: "/"
    },
    {
      id: "simple-component",
      title: "Simple Component",
      href: "/simple-component"
    },
    {
      id: "simple-component-with-props",
      title: "Simple Component With Props",
      href: "/simple-component-with-props"
    },
    {
      id: "component-with-children",
      title: "Component With Children",
      href: "/component-with-children"
    },
    {
      id: "state",
      title: "React UseState",
      href: "/state"
    },
    {
      id: "effect",
      title: "React UseEffect",
      href: "/effect"
    },
    {
      id: "fragment",
      title: "React Fragment",
      href: "/fragment"
    },
    {
      id: "conditional-rendering",
      title: "Conditional Rendering Component",
      href: "/conditional-rendering"
    },
    {
      id: "list-rendering",
      title: "List Rendering",
      href: "/list-rendering"
    },
    {
      id: "stying",
      title: "Styling CSS",
      href: "/styling"
    },
    {
      id: "refs",
      title: "Refs In React",
      href: "/refs"
    },
    {
      id: "events",
      title: "Events",
      href: "/events"
    },
    {
      id: "json",
      title: "Json",
      href: "/json"
    },
    {
      id: "rest-api",
      title: "Rest Api Call",
      href: "/rest-api"
    }
  ];
  var match = React.useState((function () {
          return "introduction";
        }));
  var setSelectedLink = match[1];
  var selectedLink = match[0];
  var parentStyle = {
    backgroundColor: "#db4d3f",
    display: "flex",
    padding: "5px 0",
    width: "300px",
    flexDirection: "column"
  };
  var linkWrapper = {
    display: "flex",
    overflow: "scroll",
    flexDirection: "column"
  };
  var navItemStyle = {
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    fontWeight: "500",
    minHeight: "50px",
    paddingLeft: "20px",
    alignItems: "center",
    transition: "0.3s ease-in-out"
  };
  var selectedLinkStyle = {
    backgroundColor: "rgba(255,255,255,0.2)",
    paddingLeft: "30px",
    borderTopRightRadius: "50px",
    borderBottomRightRadius: "50px"
  };
  var finalLinkStyle = function (link) {
    if (link.id === selectedLink) {
      return Object.assign(({}), navItemStyle, selectedLinkStyle);
    } else {
      return navItemStyle;
    }
  };
  return React.createElement("div", {
              style: parentStyle
            }, React.createElement(NavLogo$ReasonReactExamples.make, { }), React.createElement("div", {
                  style: linkWrapper
                }, Belt_Array.map(links, (function (item) {
                        return React.createElement("div", {
                                    key: item.title,
                                    style: finalLinkStyle(item),
                                    onClick: (function (__x) {
                                        ReasonReactRouter.push(item.href);
                                        Curry._1(setSelectedLink, (function (param) {
                                                return item.id;
                                              }));
                                        
                                      })
                                  }, item.title);
                      }))));
}

var make = NavigationPanel;

exports.make = make;
/* react Not a pure module */
