open ReasonReact;

[@react.component]
let make = () => {
  <>
    <div> {string("Cat")} </div>
    <div> {string("Dog")} </div>
    <div> {string("Rat")} </div>
  </>;
};