open ReasonReact;

[@react.component]
let make = () => {

  let singleStyleObject = ReactDOMStyle.make(~color="#f00", ~fontSize = "20px", ());
  let style =ReactDOMStyle.make(~color="#fff000", ~backgroundColor="#bb00bb", ());
  let textStyle = ReactDOMRe.Style.make(~fontSize="40px", ());
  let paddingStyle = ReactDOMRe.Style.make(~paddingLeft = "20px", ());

  // since ReactDOMRe.Style.combine takes only two arguments, to extend it we can use the second argument to extend further
  // by using another ReactDOMRe.Style.combine
  let multipleStyles = 
  ReactDOMRe.Style.combine(
          singleStyleObject,
          ReactDOMRe.Style.combine(style , 
          ReactDOMRe.Style.combine(paddingStyle, textStyle)
          )
  );
  <>
    <div style=singleStyleObject> {string("Applying a single style here")} </div>
    <div style={ReactDOMStyle.combine(textStyle, paddingStyle)}>
      {string("Applying Combined style object here")}
    </div>

      <div style=multipleStyles>
      {string("Applying More than two style object here")}
    </div>
  </>;
};