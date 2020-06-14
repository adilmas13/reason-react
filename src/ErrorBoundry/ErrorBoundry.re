open ReasonReact;

[@react.component]
let make = () => {
  let (name, setName) = React.useState(() => "John");

  <>
    <h3>
      {string(
         "The Error boundry is wrapper arround the content of App.js to handle all crashes",
       )}
    </h3>
    <h4>
      {string(
         "Type to cause an error, reference of the cause of error is below",
       )}
    </h4>
    <a
      target="_blank"
      href="https://reasonml.github.io/reason-react/docs/en/usestate-event-value">
      {string(
         "https://reasonml.github.io/reason-react/docs/en/usestate-event-value",
       )}
    </a>
    <br />
    <br />
    <input
      type_="text"
      value=name
      onChange={event => setName(_ => ReactEvent.Form.target(event)##value)}
    />
  </>;
};