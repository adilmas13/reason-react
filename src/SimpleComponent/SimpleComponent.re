[@react.component]
let make = () => {
  <div>
     {ReasonReact.string("Simple ReasonReact Component")} </div>;
    // since reasomml treats the last statement as ots return type, the UI html has to be the returned type
};