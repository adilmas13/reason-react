open ReasonReact;

[@react.component]
let make = () => {
  let (value, setValue) = React.useState(() => "John Doe");
  let (clicked, setClicked) = React.useState(() => false);
  let handleChange = event => {
    setValue(ReactEvent.Form.target(event)##value);
    ();
  };

  let handleClick = event => {
    Js.log(ReactEvent.Synthetic.target(event));
    setClicked(_ => true);
    ();
  };

  <>
    <button onClick=handleClick> {string("Click me")} </button>
    {clicked ? <div> {string("Clicked")} </div> : React.null}
    <br />
    <input type_="text" value onChange=handleChange />
    <div> {string(value)} </div>
  </>;
};