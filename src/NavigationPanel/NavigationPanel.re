open ReactDOMRe.Style;

[@react.component]
let make = () => {

    let parentStyle = make(~display="flex",~flexDirection="column", ~width="300px", ~backgroundColor="#db4d3f",());

    <div style=(parentStyle)>
    <NavLogo/>
    </div>

}