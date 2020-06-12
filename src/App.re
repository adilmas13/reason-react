open ReasonReact;

[@react.component]
let make = (~name) => {

  let (visibile, setVisible) = React.useState(() => true);


  let timeToDestroy = (_) => {
    Js.log("Calling destroy .....");
    setVisible((visibility) => !visibility);
  };

  <div>
<button onClick=timeToDestroy>{string("DESTROY")}</button>
    {
      visibile ? <InnerComponent>
      <div> {string("This is a child component")} </div>
    </InnerComponent> : <div>{string("OK")}</div>
    }
    <div>{visibile ? string("isVisible") : string("Gone")}</div>
  </div>
};