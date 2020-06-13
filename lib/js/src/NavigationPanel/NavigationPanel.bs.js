'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");
var NavLogo$ReasonReactExamples = require("./NavLogo.bs.js");

function NavigationPanel(Props) {
  var links = [
    {
      id: "home",
      title: "Home",
      href: "/"
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
    }
  ];
  var match = React.useState((function () {
          return "home";
        }));
  var setSelectedLink = match[1];
  var selectedLink = match[0];
  var parentStyle = {
    backgroundColor: "#db4d3f",
    display: "flex",
    width: "300px",
    flexDirection: "column"
  };
  var linkWrapper = {
    display: "flex",
    flexDirection: "column"
  };
  var navItemStyle = {
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    fontWeight: "500",
    height: "50px",
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
