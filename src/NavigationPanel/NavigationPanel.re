open ReactDOMRe.Style;

type navigation = {id:string,title:string, href:string};
[@react.component]
let make = () => {

        let links = [|
    {
        id:"introduction",
        title:"Introduction",
        href : "/"
    },
    {
        id:"simple-component",
        title:"Simple Component",
        href : "/simple-component"
    },
    {
         id:"simple-component-with-props",
        title:"Simple Component With Props",
        href : "/simple-component-with-props"
    },
    {
         id:"component-with-children",
        title:"Component With Children",
        href : "/component-with-children"
    },
     {
         id:"state",
        title:"React UseState",
        href : "/state"
    },
     {
         id:"effect",
        title:"React UseEffect",
        href : "/effect"
    },
    {
         id:"fragment",
        title:"React Fragment",
        href : "/fragment"
    },
    {
         id:"conditional-rendering",
        title:"Conditional Rendering Component",
        href : "/conditional-rendering"
    },
    {
         id:"list-rendering",
        title:"List Rendering",
        href : "/list-rendering"
    },
    {
         id:"stying",
        title:"Styling CSS",
        href : "/styling"
    },
     {
        id:"refs",
        title:"Refs In React",
        href : "/refs"
    },
    {
         id:"events",
        title:"Events",
        href : "/events"
    },
    {
        id:"json",
        title:"Json",
        href : "/json"
    },
    {
        id:"rest-api",
        title:"Rest Api Call",
        href : "/rest-api"
    }
    |]

    let (selectedLink, setSelectedLink) = React.useState(() => "introduction");
    
    let parentStyle = make(~display="flex",~flexDirection="column", ~width="300px", ~backgroundColor="#db4d3f",~padding="5px 0", ());
    let linkWrapper = make(~display="flex",~flexDirection="column", ~overflow="scroll", ());
    let navItemStyle = make(~color="#fff", ~fontWeight="500", ~cursor= "pointer", ~minHeight = "50px", ~display="flex", ~alignItems =  "center",~paddingLeft="20px" , ~transition="0.3s ease-in-out",());
    
    let selectedLinkStyle = make(~backgroundColor="rgba(255,255,255,0.2)", ~borderTopRightRadius = "50px",  ~borderBottomRightRadius = "50px", ~paddingLeft="30px", ());
    
    let redirect = (_,navigation: navigation) => {
        ReasonReactRouter.push(navigation.href);
        setSelectedLink(_ => navigation.id);
        ();
    };

    let finalLinkStyle = (link:navigation) => {
        switch(link.id == selectedLink){
            | true => combine(navItemStyle, selectedLinkStyle)
            | false  => navItemStyle
        }
    };

    <div style=(parentStyle)>
    <NavLogo/>
    <div style=(linkWrapper)>
    {
      Belt.Array.map(links, item =>
          <div 
          onClick=redirect(_,item)
          style=finalLinkStyle(item) key={item.title}> {React.string(item.title)} </div>
        )
      /* Since everything is typed, the arrays need to be, too! */
      ->React.array
    }
    </div>
    </div>

}