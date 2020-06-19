open ReasonReact;
[@react.component]
let make = () => {
  let (message, setMessage) = React.useState(() => "Awaiting message from child");

  let handleChildCallback = value => {
    setMessage(_ => "Message from child " ++ string_of_int(value));
  };
  <>
    <h4> {string("Im the Parent")} </h4>
    <div> {string(message)} </div>
    <ChildComponent callback=handleChildCallback />
  </>;
};