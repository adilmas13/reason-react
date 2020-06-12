open ReasonReact;

type routing = |Home|Users|Help;

[@react.component]
let make = () => {

  let parentWrapperHeight = ReactDOMRe.Style.make(~height="100vh", ~display="flex",~flexDirection="column", ());

  let bodyStyle =  ReactDOMRe.Style.make(~flex="1", ());

  let url = ReasonReactRouter.useUrl();
  Js.log(url);

  let body = () => {
       <div style=(bodyStyle)>
       {
         switch (url.path) {
        | [] => <Home name="welcome"/>
        | ["users"] => <div>{string("Users")}</div>
        |_ => <Home name="Adil"/>
   };
       }
       </div>
  };

  //  render
  <div style=(parentWrapperHeight)>
    <Header/>
    {body()}
 <Footer/>
  </div>


  
};
