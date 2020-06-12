open ReasonReact;

[@react.component]
let make = (~name) => {
  <button> {string("Hello " ++ name ++ "!")} </button>;
};
