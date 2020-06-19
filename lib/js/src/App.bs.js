'use strict';

var React = require("react");
var ReasonReactRouter = require("reason-react/lib/js/src/ReasonReactRouter.bs.js");
var ReasonReactErrorBoundary = require("reason-react/lib/js/src/ReasonReactErrorBoundary.bs.js");
var Header$ReasonReactExamples = require("./Header/Header.bs.js");
var RestApi$ReasonReactExamples = require("./RestApi/RestApi.bs.js");
var ReactState$ReasonReactExamples = require("./ReactState/ReactState.bs.js");
var References$ReasonReactExamples = require("./References/References.bs.js");
var ErrorBoundry$ReasonReactExamples = require("./ErrorBoundry/ErrorBoundry.bs.js");
var Introduction$ReasonReactExamples = require("./Introduction/Introduction.bs.js");
var ReactEffects$ReasonReactExamples = require("./ReactEffects/ReactEffects.bs.js");
var JsonComponent$ReasonReactExamples = require("./JsonComponent/JsonComponent.bs.js");
var ListRendering$ReasonReactExamples = require("./ListRendering/ListRendering.bs.js");
var ReactFragment$ReasonReactExamples = require("./ReactFragment/ReactFragment.bs.js");
var ReactReducers$ReasonReactExamples = require("./ReactReducers/ReactReducers.bs.js");
var RefsComponent$ReasonReactExamples = require("./Refs/RefsComponent.bs.js");
var EventComponent$ReasonReactExamples = require("./Event/EventComponent.bs.js");
var NavigationPanel$ReasonReactExamples = require("./NavigationPanel/NavigationPanel.bs.js");
var ParentComponent$ReasonReactExamples = require("./ChildParentCommunication/ParentComponent.bs.js");
var SimpleComponent$ReasonReactExamples = require("./SimpleComponent/SimpleComponent.bs.js");
var StyledComponent$ReasonReactExamples = require("./StyledComponent/StyledComponent.bs.js");
var ComponentWithChildren$ReasonReactExamples = require("./ComponentWithChildren/ComponentWithChildren.bs.js");
var SimpleComponentWithProps$ReasonReactExamples = require("./SimpleComponentWithProps/SimpleComponentWithProps.bs.js");
var ConditionalRenderingComponents$ReasonReactExamples = require("./ConditionalRenderingComponents/ConditionalRenderingComponents.bs.js");

function App$ErrorHandler(Props) {
  var error = Props.error;
  var info = Props.info;
  React.useEffect((function () {
          console.log("Error");
          
        }), /* tuple */[
        error,
        info
      ]);
  return "An error occured";
}

var ErrorHandler = {
  make: App$ErrorHandler
};

function App(Props) {
  var parentStyle = {
    display: "flex",
    height: "100vh"
  };
  var bodyStyle = {
    padding: "20px",
    flex: "1",
    boxSizing: "border-box"
  };
  var bodyWrapperStyle = {
    display: "flex",
    flex: "1",
    flexDirection: "column"
  };
  var url = ReasonReactRouter.useUrl(undefined, undefined);
  var body = function (param) {
    var match = url.hash;
    var tmp;
    switch (match) {
      case "/child-parent-communication" :
          tmp = React.createElement(ParentComponent$ReasonReactExamples.make, { });
          break;
      case "/component-with-children" :
          tmp = React.createElement(ComponentWithChildren$ReasonReactExamples.make, { });
          break;
      case "/conditional-rendering" :
          tmp = React.createElement(ConditionalRenderingComponents$ReasonReactExamples.make, { });
          break;
      case "/effect" :
          tmp = React.createElement(ReactEffects$ReasonReactExamples.make, { });
          break;
      case "/error-boundry" :
          tmp = React.createElement(ErrorBoundry$ReasonReactExamples.make, { });
          break;
      case "/events" :
          tmp = React.createElement(EventComponent$ReasonReactExamples.make, { });
          break;
      case "/fragment" :
          tmp = React.createElement(ReactFragment$ReasonReactExamples.make, { });
          break;
      case "/introduction" :
          tmp = React.createElement(Introduction$ReasonReactExamples.make, { });
          break;
      case "/json" :
          tmp = React.createElement(JsonComponent$ReasonReactExamples.make, { });
          break;
      case "/list-rendering" :
          tmp = React.createElement(ListRendering$ReasonReactExamples.make, { });
          break;
      case "/reducers" :
          tmp = React.createElement(ReactReducers$ReasonReactExamples.make, { });
          break;
      case "/refs" :
          tmp = React.createElement(RefsComponent$ReasonReactExamples.make, { });
          break;
      case "/rest-api" :
          tmp = React.createElement(RestApi$ReasonReactExamples.make, { });
          break;
      case "/simple-component" :
          tmp = React.createElement(SimpleComponent$ReasonReactExamples.make, { });
          break;
      case "/simple-component-with-props" :
          tmp = React.createElement(SimpleComponentWithProps$ReasonReactExamples.make, { });
          break;
      case "/state" :
          tmp = React.createElement(ReactState$ReasonReactExamples.make, { });
          break;
      case "/styling" :
          tmp = React.createElement(StyledComponent$ReasonReactExamples.make, { });
          break;
      default:
        tmp = React.createElement(Introduction$ReasonReactExamples.make, { });
    }
    return React.createElement("div", {
                style: bodyStyle
              }, tmp);
  };
  return React.createElement(ReasonReactErrorBoundary.make, {
              children: React.createElement("div", {
                    style: parentStyle
                  }, React.createElement(NavigationPanel$ReasonReactExamples.make, { }), React.createElement("div", {
                        style: bodyWrapperStyle
                      }, React.createElement(Header$ReasonReactExamples.make, { }), body(undefined), React.createElement(References$ReasonReactExamples.make, { }))),
              fallback: (function (param) {
                  return React.createElement(App$ErrorHandler, {
                              error: param.error,
                              info: param.info
                            });
                })
            });
}

var make = App;

exports.ErrorHandler = ErrorHandler;
exports.make = make;
/* react Not a pure module */
