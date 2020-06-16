'use strict';

var React = require("react");

function Introduction(Props) {
  var parentWrapperStyle = {
    display: "flex",
    flexDirection: "column"
  };
  var liStyle = {
    padding: "5px"
  };
  return React.createElement("div", {
              style: parentWrapperStyle
            }, React.createElement("h2", {
                  style: {
                    margin: "0"
                  }
                }, "Your Basic ReasonReact examples in one place."), React.createElement("p", {
                  style: {
                    whiteSpace: "pre-line"
                  }
                }, "This application is purely intended for ReasonReact developers, keeping implemention in mind.\n\n      The app is build purely using ReasonReact.\n\n      Source code of the same can be found here.\n   "), React.createElement("div", {
                  style: {
                    backgroundColor: "#fafafa",
                    border: "1px solid #ccc",
                    padding: "15px",
                    width: "fit-content",
                    borderRadius: "6px"
                  }
                }, React.createElement("a", {
                      href: "https://github.com/adilmas13/reason-react",
                      target: "_blank"
                    }, "https://github.com/adilmas13/reason-react")), React.createElement("h3", {
                  style: {
                    margin: "20px 0 0 0"
                  }
                }, "Guide"), React.createElement("ul", undefined, React.createElement("li", {
                      style: liStyle
                    }, "The Left Panel shows all the implementations covered here."), React.createElement("li", {
                      style: liStyle
                    }, "The Top Header shows the File name of the component where the implementation can be viewed."), React.createElement("li", {
                      style: liStyle
                    }, "The Bottom Part shows all the references used to cover the top. It can be ReasonReact, ReactJS or third party blogs etc"), React.createElement("li", {
                      style: liStyle
                    }, "The Center Panel shows the previews.")));
}

var make = Introduction;

exports.make = make;
/* react Not a pure module */
