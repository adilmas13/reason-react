'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var ReasonReactRouter = require("reason-react/src/ReasonReactRouter.bs.js");

function Header(Props) {
  var links = [
    {
      title: "Home",
      href: "/"
    },
    {
      title: "Users",
      href: "/users"
    }
  ];
  var headerStyle = {
    backgroundColor: "#2e86c1",
    display: "flex",
    height: "70px",
    width: "100vw"
  };
  var navItemStyle = {
    color: "#fff",
    cursor: "pointer",
    display: "flex",
    fontWeight: "500",
    height: "100%",
    width: "100px",
    alignItems: "center",
    justifyContent: "center"
  };
  return React.createElement("div", {
              style: headerStyle
            }, Belt_Array.map(links, (function (item) {
                    return React.createElement("div", {
                                key: item.title,
                                style: navItemStyle,
                                onClick: (function (__x) {
                                    return ReasonReactRouter.push(item.href);
                                  })
                              }, item.title);
                  })));
}

var make = Header;

exports.make = make;
/* react Not a pure module */
