[@react.component]
let make = () => {

    let (info, setInfo) = React.useState(() => "");

    let divRef = React.useRef(Js.Nullable.null);

    let alterDiv = (_) => {
     //   setInfo(prevText => prevText ++ string_of_format(divRef.current) ++ "\n")
        Js.log(divRef);
        ();
    };

   <>
    <div onClick=alterDiv ref={ReactDOMRe.Ref.domRef(divRef)}>
    {ReasonReact.string("Click me and check console log")}
    <br/>

    <div style=ReactDOMRe.Style.make(~whiteSpace="pre-wrap" ,())>{ReasonReact.string(info)}</div>
    </div>
   </>;
}