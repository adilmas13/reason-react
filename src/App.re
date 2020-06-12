open ReasonReact;

  [@react.component]
  let make = (~name) => {
    <div> <button> {string("Hello " ++ name ++ "!")} </button> 
    <InnerComponent>
    <div>
      {string("This is a child component")}
    </div>
    </InnerComponent>

    </div>;
  };
