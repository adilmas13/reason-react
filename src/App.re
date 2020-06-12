open ReasonReact;
open ReactDOMRe.Style;

type routing = |Home|Users|Help;

[@react.component]
let make = () => {

  // make function is part of ReactDOMRe.Style module which is opened on top
  let parentWrapperHeight = make(~height="100vh", ~display="flex",~flexDirection="column", ());

  // make function is part of ReactDOMRe.Style module which is opened on top
  let bodyStyle = make(~flex="1", ());

  // gets the route url
  let url = ReasonReactRouter.useUrl();

  React.useEffect0(() => {
   let token = ReasonReactRouter.watchUrl(url => {
     Js.log("Listening ...");
     Js.log(url);
   })
    Some(() =>  ReasonReactRouter.unwatchUrl(token));
  });

  let body = () => {
       <div style=(bodyStyle)>
       {
         switch (url.path) {
        | [] => <Home name="welcome"/>
        | ["users"] => <div>{string("Users")}</div>
        | ["refs"] => <RefsComponent/>
         | ["events"] => <EventComponent/>
        |_ => <Home name="Adil"/>
   };
       }
       </div>
  };

  //  render
  <ReasonReactErrorBoundary fallback={_ => "An error occured"->React.string}>
    <div style=(parentWrapperHeight)>
    <Header/>
    {body()}
  <Footer/>
  </div>
  </ReasonReactErrorBoundary>



  
};
