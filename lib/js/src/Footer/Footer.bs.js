'use strict';

var React = require("react");

function Footer(Props) {
  var footerStyle = {
    backgroundColor: "#2e86c1",
    height: "70px",
    width: "100vw"
  };
  return React.createElement("div", {
              style: footerStyle
            });
}

var make = Footer;

exports.make = make;
/* react Not a pure module */
