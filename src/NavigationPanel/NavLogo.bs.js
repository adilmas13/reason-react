'use strict';

var React = require("react");

function NavLogo(Props) {
  var logoWrapper = {
    display: "flex",
    paddingTop: "10px",
    paddingBottom: "10px",
    justifyContent: "center"
  };
  var logoStyle = {
    height: "70px",
    width: "70px"
  };
  var reactLogoStyle = Object.assign(({}), logoStyle, {
        marginLeft: "10px"
      });
  return React.createElement("div", {
              style: logoWrapper
            }, React.createElement("img", {
                  style: logoStyle,
                  src: "assets/logo/reasonlogo.png"
                }), React.createElement("img", {
                  style: reactLogoStyle,
                  src: "assets/logo/reactlogo.png"
                }));
}

var make = NavLogo;

exports.make = make;
/* react Not a pure module */
