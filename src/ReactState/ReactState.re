open ReasonReact;

[@react.component]
let make = () => {

  let (counter1, setCounter1) = React.useState(() => 0);

  let (counter2, setCounter2) = React.useState(() => 0);

  let (counter3, setCounter3) = React.useState(() => 0);

  let incrementCounter1 = _ => setCounter1(prevCount => prevCount + 1);

  let incrementCounter2 = _ => setCounter2(prevCount => prevCount + 1);

  // using the same function to update the state conditionally
  let conditionalUpdate = (_, isIncrement: bool) => {
    switch(isIncrement) {
      | true =>  setCounter3(prevCount => prevCount + 1);
      | false =>  setCounter3(prevCount => prevCount - 1);
    }
  };

  <div>
    <button onClick=incrementCounter1> {string("Update Counter 1")} </button>
    <div> {string("Counter 1 => " ++ string_of_int(counter1))} </div>
    <br/>
     <button onClick=incrementCounter2>  {string("Update Counter 2  ")} </button>
    <div> {string("Counter 2 => " ++ string_of_int(counter2))} </div>

    <br/>
    <br/>

    <div>{string("-------- Conditional State Change using same function -----")}</div>
    <br/>
    <button onClick=conditionalUpdate(_,true)> {string("Increment Counter 3")} </button>
    <button onClick=conditionalUpdate(_,false)> {string("Decrement Counter 3")} </button>
    <div> {string("Counter 3 => " ++ string_of_int(counter3))} </div>
  </div>;
};
