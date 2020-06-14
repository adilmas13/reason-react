open ReasonReact;

[@react.component]
let make = () => {
  let list = [|
    "Superman",
    "Batman",
    "Spiderman",
    "Ironman",
    "Thor",
    "Captain America",
  |];
  <div>
    {Belt.Array.map(list, item => <div key=item> {string(item)} </div>)
     ->React.array}
  </div>;
};