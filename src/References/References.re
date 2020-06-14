open ReasonReact;
open React;
open ReactDOMRe.Style;

[@react.component]
let make = () => {
  let (references, setReferences) =
    useState(() => [|"https://github.com/adilmas13/reason-react"|]);

  let updateReferences = (references: array(string)) =>
    setReferences(_ => references);

  useEffect0(() => {
    let token =
      ReasonReactRouter.watchUrl(url => {
        switch (url.hash) {
        | "/introduction" =>
          updateReferences([|"https://github.com/adilmas13/reason-react"|])
        | "/simple-component" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/components#a-note-on-children",
            "https://reactjs.org/docs/react-component.html",
          |])
        | "/simple-component-with-props" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/components#a-note-on-children",
            "https://reasonml.github.io/reason-react/docs/en/render-props",
          |])
        | "/component-with-children" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/jsx#children",
            "https://reasonml.github.io/reason-react/docs/en/components#a-note-on-children",
            "https://reasonml.github.io/reason-react/docs/en/render-props",
          |])
        | "/state" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/usestate-hook",
            "https://reactjs.org/docs/hooks-state.html",
            "https://reasonml.github.io/reason-react/docs/en/use-state-use-effect",
            "https://medium.com/jalgos/hooks-in-reasonml-an-introduction-1eac6ed32314",
          |])
        | "/effect" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/useeffect-hook",
            "https://reasonml.github.io/reason-react/docs/en/use-state-use-effect",
            "https://reasonml.github.io/reason-react/docs/en/components#hooks",
            "https://reactjs.org/docs/hooks-effect.html",
            "https://medium.com/jalgos/hooks-in-reasonml-an-introduction-1eac6ed32314",
          |])
        | "/fragment" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/jsx#fragment",
            "https://reactjs.org/docs/fragments.html",
          |])
        | "/conditional-rendering" =>
          updateReferences([|
            "https://gist.github.com/jack-lewin/badd7710d8cc850eb25c79c7891ccdd5",
            "https://reasonml.chat/t/how-do-i-conditionally-display-an-element-in-reason-react/1660",
            "https://reactjs.org/docs/conditional-rendering.html",
          |])
        | "/list-rendering" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/simple",
          |])
        | "/styling" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/style",
          |])
        | "/refs" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/refs",
          |])
        | "/events" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/usestate-event-value",
            "https://reasonml.github.io/reason-react/docs/en/event",
          |])
        | "/error-boundry" =>
          updateReferences([|
            "https://reasonml.github.io/reason-react/docs/en/error-boundaries",
            "https://reactjs.org/docs/error-boundaries.html",
          |])
        | "/json" => updateReferences([||])
        | "/rest-api" => updateReferences([||])
        | _ => updateReferences([||])
        }
      });
    Some(() => ReasonReactRouter.unwatchUrl(token));
  });

  let parentStyle =
    make(
      ~minHeight="150px",
      ~fontSize="20px",
      ~fontWeight="500",
      ~backgroundColor="#48a9dc",
      ~display="flex",
      ~flexDirection="column",
      ~paddingTop="10px",
      ~paddingLeft="20px",
      ~color="#fff",
      (),
    );
  let linkStyle = make(~color="#fff", ~fontSize="14px", ());

  <div style=parentStyle>
    <div style={make(~fontSize="16px", ())}> {string("References")} </div>
    <ul style={make(~marginTop="5px", ())}>
      {Belt.Array.map(references, item =>
         <li key=item>
           <a style=linkStyle href=item target="_blank"> {string(item)} </a>
         </li>
       )
       ->React.array}
    </ul>
  </div>;
};