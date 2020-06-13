open ReactDOMRe.Style;
open React;
open ReasonReact;
type navigation = {title:string, href:string};

[@react.component]
let make = () => {
    let (title,setTitle)=useState(() => "Home")

    let updateTitle = (newTitle:string) => setTitle(_ => newTitle);

    useEffect0(() => {
       let token = ReasonReactRouter.watchUrl(url => {
            switch(url.path){
                 | [] => updateTitle("Home")
        | ["users"] => updateTitle("Users")
        | ["refs"] => updateTitle("RefsComponent")
        | ["events"] => updateTitle("EventComponent")
        |_ => updateTitle("Home")
            }
        });
        Some(()=> ReasonReactRouter.unwatchUrl(token));
    });

    let headerStyle = make(~height ="70px", ~fontSize="20px",~fontWeight="500", ~backgroundColor="#48a9dc", ~display="flex", ~alignItems="center", ~paddingLeft="20px", ~color="#fff", ());

    <div style=(headerStyle)>
        {string("Component Name : " ++ title)}
    </div>
}