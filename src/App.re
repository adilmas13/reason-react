open ReactDOMRe.Style;


[@react.component]
let make = () => {

  // make function is part of ReactDOMRe.Style module which is opened on top
  let parentStyle = make(~height="100vh", ~display="flex", ());

  // make function is part of ReactDOMRe.Style module which is opened on top
  let bodyStyle = make(~flex="1", ~padding="20px",~boxSizing="border-box",());

  let bodyWrapperStyle= make(~display="flex", ~flexDirection="column",~flex="1",());

  // gets the route url
  let url = ReasonReactRouter.useUrl();

  let body = () => {
       <div style=(bodyStyle)>
       {
         switch (url.path) {
        | [] => <Home name="welcome"/>
        | ["simple-component"] => <SimpleComponent/>
        | ["simple-component-with-props"] => <SimpleComponentWithProps/>
        | ["component-with-children"] => <ComponentWithChildren/>
        | ["state"] => <ReactState/>
        | ["effect"] => <ReactEffects/>
        | ["styling"] => <StyledComponent/>
        | ["refs"] => <RefsComponent/>
        | ["events"] => <EventComponent/>
        |_ => <Home name="Adil"/>
   };
       }
       </div>
  };

  //  render
  <ReasonReactErrorBoundary fallback={_ => "An error occured"->React.string}>

    <div style=(parentStyle)>

    <NavigationPanel/>
        <div style=bodyWrapperStyle>
          <Header/>
          {body()}
        </div>
    </div>
  
  
  </ReasonReactErrorBoundary>

};
