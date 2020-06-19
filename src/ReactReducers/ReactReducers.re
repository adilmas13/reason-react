open ReasonReact;

/* we create a type for the action */
type action =
  | INCREMENT
  | DECREMENT;

/* and do the same for state */
type state = {count: int};

let initialState: state = {count: 0};

let reducer = (state, action) =>
  switch (action) {
  | INCREMENT => {count: state.count + 1}
  | DECREMENT => {count: state.count - 1}
  };

[@react.component]
let make = () => {
  let (state, dispatch) = React.useReducer(reducer, initialState);

  let increment = _ => dispatch(INCREMENT);
  let decrement = _ => dispatch(DECREMENT);
  <>
    <h4>{string("Changing state using React Reducer")}</h4>
    <div> {string("Count => " ++ string_of_int(state.count))} </div>
    <button onClick=increment> {string("INCREMENT")} </button>
    <button onClick=decrement> {string("DECREMENT")} </button>
  </>;
};