[@react.component]
let make = () => {
    let divRef = React.useRef(Js.Nullable.null);

    let alterDiv = (_) => {
        Js.log(divRef.current);
        ();
    };

    <div onClick=alterDiv ref={ReactDOMRe.Ref.domRef(divRef)}>
    {ReasonReact.string("Click me and check log")}
    </div>
}