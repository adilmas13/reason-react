open ReasonReact;
open ReactDOMRe.Style;

[@react.component]
let make = () => {
  let githubLink = "https://github.com/adilmas13/reason-react";

  let title = "Your Basic ReasonReact examples in one place.";

  let parentWrapperStyle = make(~display="flex", ~flexDirection="column", ());

  let liStyle = make(~padding="5px", ());

  let description = "This application is purely intended for ReasonReact developers, keeping implemention in mind.\n
      The app is build purely using ReasonReact.\n
      Source code of the same can be found here.
   ";

  <div style=parentWrapperStyle>
    <h2 style={make(~margin="0", ())}> {string(title)} </h2>
    <p style={make(~whiteSpace="pre-line", ())}> {string(description)} </p>
    <div
      style={make(
        ~backgroundColor="rgba(240,240,240)",
        ~width="fit-content",
        ~padding="10px 10px",
        ~borderRadius="10px",
        (),
      )}>
      <a href="https://github.com/adilmas13/reason-react">
        {string(githubLink)}
      </a>
    </div>
    <h3 style={make(~margin="20px 0 0 0", ())}> {string("Guide")} </h3>
    <ul>
      <li style=liStyle>
        {string("The Left Panel shows all the implementations covered here.")}
      </li>
      <li style=liStyle>
        {string(
           "The Top Header shows the File name of the component where the implementation can be viewed.",
         )}
      </li>
      <li style=liStyle>
        {string(
           "The Bottom Part shows all the references used to cover the top. It can be ReasonReact, ReactJS or third party blogs etc",
         )}
      </li>
      <li style=liStyle>
        {string("The Center Panel shows the previews.")}
      </li>
    </ul>
  </div>;
};