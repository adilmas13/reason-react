[@react.component]
let make = (~children) => {

  Js.log(children);
open ReasonReact;

let (count, setCount) = React.useState(() => 0);

let (anotherCount, setAnotherCount) = React.useState(() => 0);

let incrementCounter1 = (_) => setCount(prevCount => prevCount + 1);

let incrementCounter2= (_) => setAnotherCount(prevCount => prevCount + 1);

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
  Js.log("Called");
  Some(() => Js.log("Something"));
});

// gets called only when count state is updated
// something get called in destroy of component and also on each state change of count
React.useEffect1(() =>{
  Js.log("Count EFFECT");
  Some(() => Js.log("Something"));
}, [|count|]);

// gets called only the first time when the component is rendered
// but something will not get called the first time
React.useEffect0(() => {
  Js.log("Called only once");
  // use this for cleanup
  Some(() => Js.log("Something"));
});
  
 <>
   <h3>{string("Inner Component")}</h3>
 <button onClick=incrementCounter1> {string("Update Counter 1")} </button>
     <button onClick=incrementCounter2> {string("Update Counter 2  ")} </button>
 <div>{string("Count => " ++ string_of_int(count) )}</div>
  <div>{string("Another Count => " ++ string_of_int(anotherCount) )}</div>

  <div>{ReasonReact.string("Hello world")}
  children
  </div>
 </>
};
