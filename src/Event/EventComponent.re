[@react.component]
let make = () => {

    let (value, setValue) = React.useState(() => "John Doe")
    let handleChange = event => {
        setValue(ReactEvent.Form.target(event)##value);
        ();
    };

    <input type_="text" value={value} onChange=handleChange/>;
}