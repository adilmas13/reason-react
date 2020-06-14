'use strict';

var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function ListRendering(Props) {
  var list = [
    "Superman",
    "Batman",
    "Spiderman",
    "Ironman",
    "Thor",
    "Captain America"
  ];
  return React.createElement("div", undefined, Belt_Array.map(list, (function (item) {
                    return React.createElement("div", {
                                key: item
                              }, item);
                  })));
}

var make = ListRendering;

exports.make = make;
/* react Not a pure module */
