'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");

var initialState = {
  count: 0
};

function reducer(state, action) {
  if (action) {
    return {
            count: state.count - 1 | 0
          };
  } else {
    return {
            count: state.count + 1 | 0
          };
  }
}

function ReactReducers(Props) {
  var match = React.useReducer(reducer, initialState);
  var dispatch = match[1];
  var increment = function (param) {
    return Curry._1(dispatch, /* INCREMENT */0);
  };
  var decrement = function (param) {
    return Curry._1(dispatch, /* DECREMENT */1);
  };
  return React.createElement(React.Fragment, undefined, React.createElement("h4", undefined, "Changing state using React Reducer"), React.createElement("div", undefined, "Count => " + String(match[0].count)), React.createElement("button", {
                  onClick: increment
                }, "INCREMENT"), React.createElement("button", {
                  onClick: decrement
                }, "DECREMENT"));
}

var make = ReactReducers;

exports.initialState = initialState;
exports.reducer = reducer;
exports.make = make;
/* react Not a pure module */
