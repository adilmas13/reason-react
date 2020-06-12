open ReasonReact;

[@react.component]
let make = (~name) => {


let (count, setCount) = React.useState(() => 0);

let (anotherCount, setAnotherCount) = React.useState(() => 0);

let incrementCounter = (_) => setCount(prevCount => prevCount + 1);

let decrementCounter = (_) => setAnotherCount(prevCount => prevCount + 1);

let test = (_, isIncrement:bool) => {
  if(count >= 10){
    ();
  }else{
  setCount(prevCount => isIncrement ? prevCount + 1 : prevCount - 1)
  }
}

React.useEffect2(() =>{
  Js.log("EFFECT one");
  Some(() => Js.log("Something"));
}, (count, anotherCount));


  <div>
    <button onClick=incrementCounter> {string("Increament")} </button>
     <button onClick=decrementCounter> {string("Decrement")} </button>
     <button>{string("Clicked")}</button>
    <InnerComponent>
      <div> {string("This is a child component")} </div>
      <div>{string("Count => " ++ string_of_int(count) )}</div>
            <div>{string("Another Count => " ++ string_of_int(anotherCount) )}</div>
    </InnerComponent>
  </div>
};
