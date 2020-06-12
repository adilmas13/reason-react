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
<div>{string("Welcome " ++ name)}</div>
    {
      visibile ? <InnerComponent>
      <div key="1"> {string("This is a child1 component")} </div>
      <div key="2"> {string("This is a child2 component")} </div>
    </InnerComponent> : <div>{string("OK")}</div>
    }
    <div>{visibile ? string("isVisible") : string("Gone")}</div>

    <StyledComponent/>
  </div>
};