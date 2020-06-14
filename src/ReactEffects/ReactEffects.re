[@react.component]
let make = () => {
  open ReasonReact;

  let (counter1, setCounter1) = React.useState(() => 0);

  let (counter2, setCounter2) = React.useState(() => 0);

  let (info, setInfo) = React.useState(() => "");

  let incrementCounter1 = _ => setCounter1(prevCount => prevCount + 1);

  let incrementCounter2 = _ => setCounter2(prevCount => prevCount + 1);

  let updateInfo = (info: string) =>
    setInfo(prevInfo => prevInfo ++ info ++ "\n");

  // gets called when any variable state is updated and also when the component is destroyed
  React.useEffect(() => {
    Js.log("Called due to change in some state");
    Some(() => Js.log("After Effect 1"));
  });

  // gets called only when count state is updated
  // something get called in destroy of component and also on each state change of count
  React.useEffect1(
    () => {
      updateInfo("Side Effect of Counter 1");
      Some(() => Js.log("After Effect 2"));
    },
    [|counter1|],
  );

  // gets called only when count state is updated
  // something get called in destroy of component and also on each state change of count
  React.useEffect1(
    () => {
      updateInfo("Side Effect of Counter 2");
      Some(() => Js.log("After Effect 3"));
    },
    [|counter2|],
  );

  // gets called only the first time when the component is rendered
  // but something will not get called the first time
  React.useEffect0(() => {
    updateInfo("This effect is called only once during first render");
    // use this for cleanup
    Some(() => Js.log("After Effect 4"));
  });

  <div>
    <ul>
      <li>
        {string(
           "Demo shows which effect is called as a result of a change in a state/render",
         )}
      </li>
      <li>
        {string(
           "All effects are called atleast once due to the initial render of the component",
         )}
      </li>
      <li>
        {string("Check code for different implementations of effects")}
      </li>
    </ul>
    <br />
    <button onClick=incrementCounter1> {string("Update Counter 1")} </button>
    <button onClick=incrementCounter2>
      {string("Update Counter 2  ")}
    </button>
    <div> {string("Count => " ++ string_of_int(counter1))} </div>
    <div> {string("Another Count => " ++ string_of_int(counter2))} </div>
    <br />
    // Ignore the style part for noe
    <div
      style={ReactDOMRe.Style.make(
        ~whiteSpace="pre-wrap",
        ~border="1px solid black",
        ~display="inline-block",
        ~overflow="scroll",
        ~maxHeight="300px",
        ~padding="0px 10px 10px",
        (),
      )}>
      <h3> {string("----- Effect Log -----")} </h3>
      {string(info)}
    </div>
  </div>;
};