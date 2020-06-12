open ReasonReact;

[@react.component]
let make = (~name) => {

  let (visibile, setVisible) = React.useState(() => true);

  let timeToDestroy = (_) => {
    Js.log("Calling destroy .....");
    setVisible((visibility) => !visibility);
  };

  <div>
  <h3>{string("App Component")}</h3>
  <div>{string("Welcome " ++ name)}</div>
   <div>{visibile ? string("Inner component isVisible") : string("Inner component is Gone")}</div>
<button onClick=timeToDestroy>{string("DESTROY Inner Component")}</button>
    {
      visibile ? <InnerComponent>
      <div key="1"> {string("This is a child1 component")} </div>
      <div key="2"> {string("This is a child2 component")} </div>
    </InnerComponent> : <div>{string("OK")}</div>
    }
   

    <StyledComponent/>
  </div>
};