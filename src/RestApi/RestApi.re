open ReasonReact;

[@react.component]
let make = () => {
  ignore(
    Js.Promise.(
      Fetch.fetch("https://reqres.in/api/users?page=1")
      |> then_(Fetch.Response.json)
      |> then_(json => {
           Js.log(json);
           resolve();
         })
    ),
  );
  <div> {string("Check logs for now")} </div>;
};