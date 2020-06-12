open ReasonReact;

type routing = |Home|Users|Help;

[@react.component]
let make = () => {
  let url = ReasonReactRouter.useUrl();
  Js.log(url);
  switch (url.path) {
  | [] => <Home name="welcome"/>
  | ["users"] => <div>{string("Users")}</div>
  |_ => <Home name="Adil"/>
  };
 
  
};
