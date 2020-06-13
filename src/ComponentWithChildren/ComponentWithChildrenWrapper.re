[@react.component]
let make = (~children) => {

    // since reasomml treats the last statement as ots return type, the UI html has to be the returned type
    <div> 
    <div>{ReasonReact.string("----> Container starts Here <----")}</div>
    children
    <div>{ReasonReact.string("----> Container closes Here <----")}</div>
    </div>
}