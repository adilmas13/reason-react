open ReasonReact;

[@react.component]
let make = () => {
  let singleStyleObject = ReactDOMStyle.make(~color="#f00", ());
  let style =
    ReactDOMStyle.make(~color="#fff000", ~backgroundColor="#ff00ff", ());
  let textStyle = ReactDOMRe.Style.make(~fontSize="40px", ());


    let test = ReactDOMRe.Style.make(~color="#ff00ff",());
    let unsafe = ReactDOMRe.Style.unsafeAddProp(test, "something", "10px");

  <>
    <h3> {string("Styled Component")} </h3>
    <div style=singleStyleObject> {string("Single Styled object")} </div>
    <div style={ReactDOMStyle.combine(textStyle, style)}>
      {string("Applying Combined style object")}
    </div>
  </>;
};