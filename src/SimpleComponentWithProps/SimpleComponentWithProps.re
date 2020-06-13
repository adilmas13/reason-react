[@react.component]
let make = () => {

    // since reasomml treats the last statement as ots return type, the UI html has to be the returned type
    <div>
    <div> {ReasonReact.string("Simple ReasonReact Component With Props")} </div>
    <div> {ReasonReact.string("Passing John Doe and 30 to child component as props")} </div>
    <ComponentWithProps name="John Doe" age="30"/>
    </div>
}