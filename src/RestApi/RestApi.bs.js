'use strict';

var React = require("react");

function RestApi(Props) {
  fetch("https://reqres.in/api/users?page=1").then((function (prim) {
            return prim.json();
          })).then((function (json) {
          console.log(json);
          return Promise.resolve(undefined);
        }));
  return React.createElement("div", undefined, "Check logs for now");
}

var make = RestApi;

exports.make = make;
/* react Not a pure module */
