let count = ref(0);

[@react.component]
let make = (~callback) => {
  open ReasonReact;
  let sendToParent = _ => {
    count := count^ + 1;
    callback(count^);
  };

  <>
    <br />
    <div> {string("---- Start of Child Component ----")} </div>
    <button onClick=sendToParent> {React.string("Send to parent")} </button>
    <div> {string("---- End of Child Component ----")} </div>
  </>;
};