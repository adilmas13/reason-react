open ReasonReact;

[@react.component]
let make = () => {
  <>
    <h4>
      {string(
         "To avoid wrapping a component content in an extra div, we can use React Fragment <> content </>",
       )}
    </h4>
    <div>
      {string("This component's content is wrapped inside a React Fragment.")}
    </div>
  </>;
};