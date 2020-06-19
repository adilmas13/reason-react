open ReactDOMRe.Style;

type navigation = {
  id: string,
  title: string,
  href: string,
};
[@react.component]
let make = () => {
  let links = [|
    {id: "/introduction", title: "Introduction", href: "/#/introduction"},
    {
      id: "/simple-component",
      title: "Simple Component",
      href: "/#/simple-component",
    },
    {
      id: "/simple-component-with-props",
      title: "Simple Component With Props",
      href: "/#/simple-component-with-props",
    },
    {
      id: "/component-with-children",
      title: "Component With Children",
      href: "/#/component-with-children",
    },
    {
      id: "/child-parent-communication",
      title: "Child Parent Communication",
      href: "/#/child-parent-communication",
    },
    {id: "/state", title: "React UseState", href: "/#/state"},
    {id: "/effect", title: "React UseEffect", href: "/#/effect"},
    {id: "/reducers", title: "React Reducers", href: "/#/reducers"},
    {id: "/fragment", title: "React Fragment", href: "/#/fragment"},
    {
      id: "/conditional-rendering",
      title: "Conditional Rendering Component",
      href: "/#/conditional-rendering",
    },
    {
      id: "/list-rendering",
      title: "List Rendering",
      href: "/#/list-rendering",
    },
    {id: "/styling", title: "Styling CSS", href: "/#/styling"},
    {id: "/refs", title: "Refs In React", href: "/#/refs"},
    {id: "/events", title: "Events", href: "/#/events"},
    {id: "/error-boundry", title: "Error Boundry", href: "/#/error-boundry"},
    {id: "/json", title: "Json", href: "/#/json"},
    {id: "/rest-api", title: "Rest Api Call", href: "/#/rest-api"},
  |];

  let parentStyle =
    make(
      ~display="flex",
      ~flexDirection="column",
      ~width="300px",
      ~backgroundColor="#db4d3f",
      ~padding="5px 0",
      (),
    );
  let linkWrapper =
    make(~display="flex", ~flexDirection="column", ~overflow="scroll", ());
  let navItemStyle =
    make(
      ~color="#fff",
      ~fontWeight="500",
      ~cursor="pointer",
      ~minHeight="50px",
      ~display="flex",
      ~alignItems="center",
      ~paddingLeft="20px",
      ~transition="0.3s ease-in-out",
      (),
    );

  let selectedLinkStyle =
    make(
      ~backgroundColor="rgba(255,255,255,0.2)",
      ~borderTopRightRadius="50px",
      ~borderBottomRightRadius="50px",
      ~paddingLeft="30px",
      (),
    );

  let (selectedLink, setSelectedLink) = React.useState(() => "");

  let redirect = (_, navigation: navigation) => {
    /* mainly done for live site as is goes as a static web page on Github Pages and the routes wont be found on refresh as there is no server redirection of route*/
    Utility.isProduction()
      ? ReasonReactRouter.push("/reason-react" ++ navigation.href)
      : ReasonReactRouter.push(navigation.href);
  };

  let finalLinkStyle = (link: navigation) => {
    link.id == selectedLink
      ? combine(navItemStyle, selectedLinkStyle) : navItemStyle;
  };

  let tempUrl = ReasonReactRouter.useUrl().hash;

  React.useEffect0(() => {
    let token =
      ReasonReactRouter.watchUrl(url => {setSelectedLink(_ => url.hash)});
    let temp =
      switch (tempUrl) {
      | "" => "/introduction"
      | _ => tempUrl
      };
    setSelectedLink(_ => temp);
    Some(() => ReasonReactRouter.unwatchUrl(token));
  });

  <div style=parentStyle>
    <NavLogo />
    <div style=linkWrapper>
      {Belt.Array.map(links, item =>
         <div
           onClick={__x => redirect(__x, item)}
           style={finalLinkStyle(item)}
           key={item.title}>
           {React.string(item.title)}
         </div>
       )
       /* Since everything is typed, the arrays need to be, too! */
       ->React.array}
    </div>
  </div>;
};