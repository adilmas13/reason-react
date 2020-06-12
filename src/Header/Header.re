[@react.component]
let make = () => {
    let headerStyle = ReactDOMRe.Style.make(~height ="70px", ~width="100vw", ~backgroundColor="#2e86c1", ());

    <div style=(headerStyle)></div>
}