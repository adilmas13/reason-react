'use strict';

var React = require("react");

function Header(Props) {
  var headerStyle = {
    backgroundColor: "#2e86c1",
    height: "70px",
    width: "100vw"
  };
  return React.createElement("div", {
              style: headerStyle
            });
}

var make = Header;

exports.make = make;
/* react Not a pure module */
