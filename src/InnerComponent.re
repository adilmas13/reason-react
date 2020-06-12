[@react.component]
let make = (~children) => {
open ReasonReact;

let (count, setCount) = React.useState(() => 0);

let (anotherCount, setAnotherCount) = React.useState(() => 0);

let incrementCounter = (_) => setCount(prevCount => prevCount + 1);

let decrementCounter = (_) => setAnotherCount(prevCount => prevCount + 1);

// using the same function to update the state conditionally
let conditionalUpdate = (_, isIncrement:bool) => {
  if(count >= 10){
    ();
  }else{
    setCount(prevCount => isIncrement ? prevCount + 1 : prevCount - 1)
  }
}

// gets called when any variable state is updated and also when the component is destroyed
React.useEffect(() =>{
  Js.log("EFFECT one");
  Some(() => Js.log("Something"));
});

// gets called only when count state is updated
// something get called in destroy of component and also on each state change of count
React.useEffect1(() =>{
  Js.log("EFFECT one");
  Some(() => Js.log("Something"));
}, [|count|]);

// gets called only the first time when the component is rendered
// but something will not get called the first time
React.useEffect0(() => {
  Js.log("EFFECT one");
  // use this for cleanup
  Some(() => Js.log("Something"));
});
  
 <>
 <button onClick=incrementCounter> {string("Increament")} </button>
     <button onClick=decrementCounter> {string("Decrement")} </button>
     <button>{string("Clicked")}</button>
 <div>{string("Count => " ++ string_of_int(count) )}</div>
  <div>{string("Another Count => " ++ string_of_int(anotherCount) )}</div>

  <div>{ReasonReact.string("Hello world")}
  children
  </div>
 </>
};
