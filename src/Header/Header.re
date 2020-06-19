open ReactDOMRe.Style;
open React;

type navigation = {
  title: string,
  href: string,
};

[@react.component]
let make = () => {
  let (title, setTitle) = useState(() => "Introduction");

  let updateTitle = (newTitle: string) => setTitle(_ => newTitle);

  useEffect0(() => {
    let token =
      ReasonReactRouter.watchUrl(url => {
        switch (url.hash) {
        | "/introduction" => updateTitle("Introduction")
        | "/simple-component" => updateTitle("SimpleComponent")
        | "/simple-component-with-props" =>
          updateTitle("SimpleComponentWithProps")
        | "/component-with-children" => updateTitle("ComponentWithChildren")
        | "/child-parent-communication" => updateTitle("ParentComponent")
        | "/state" => updateTitle("ReactState")
        | "/effect" => updateTitle("ReactEffects")
        | "/reducers" => updateTitle("ReactReducers")
        | "/fragment" => updateTitle("ReactFragment")
        | "/conditional-rendering" =>
          updateTitle("ConditionalRenderingComponents")
        | "/list-rendering" => updateTitle("ListRendering")
        | "/styling" => updateTitle("StyledComponent")
        | "/refs" => updateTitle("RefsComponent")
        | "/events" => updateTitle("EventComponent")
        | "/error-boundry" => updateTitle("ErrorBoundry")
        | "/json" => updateTitle("JsonComponent")
        | "/rest-api" => updateTitle("RestApi")
        | _ => updateTitle("Home")
        }
      });
    Some(() => ReasonReactRouter.unwatchUrl(token));
  });

  let headerStyle =
    make(
      ~height="70px",
      ~fontSize="20px",
      ~fontWeight="500",
      ~backgroundColor="#48a9dc",
      ~display="flex",
      ~alignItems="center",
      ~paddingLeft="20px",
      ~color="#fff",
      (),
    );

  <div style=headerStyle> {string("Component Name : " ++ title)} </div>;
};