open ReasonReact;
open ReactDOMRe.Style;
type navigation = {title:string, href:string};

[@react.component]
let make = () => {
    let links = [|{
        title:"Home",
        href : "/"
    },
    {
        title:"Users",
        href : "/users"
    }|]


    let headerStyle = make(~height ="70px", ~width="100vw", ~backgroundColor="#2e86c1", ~display="flex", ());

    let navItemStyle = make(~color="#fff", ~fontWeight="500", ~cursor= "pointer", ~height = "100%", ~width="100px", ~display="flex", ~alignItems =  "center", ~justifyContent="center", ());

    let redirect = (_,navigation: navigation) => ReasonReactRouter.push(navigation.href);

    <div style=(headerStyle)>
     {
      Belt.Array.map(links, item =>
          <div 
          onClick=redirect(_,item)
          style=(navItemStyle) key={item.title}> {React.string(item.title)} </div>
        )
      /* Since everything is typed, the arrays need to be, too! */
      ->React.array
    }

    </div>
}