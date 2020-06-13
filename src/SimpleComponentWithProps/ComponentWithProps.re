[@react.component]
let make = (~name, ~age) => {

    <div>
    <div>{ReasonReact.string("Inside Child component (ComponentWithProps)")}</div>
    <div>{ReasonReact.string("Name : " ++ name)}</div>
    <div>{ReasonReact.string("Age : " ++ age)}</div>
    </div>
}