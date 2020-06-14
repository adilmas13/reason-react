[@react.component]
let make = () => {
  <div>

      <ComponentWithChildrenWrapper>
        <div> {ReasonReact.string("I am a child")} </div>
      </ComponentWithChildrenWrapper>
      <br />
      <br />
      <ComponentWithChildrenWrapper>
        <div> {ReasonReact.string("I am a child")} </div>
        <div> {ReasonReact.string("I am a child 1")} </div>
      </ComponentWithChildrenWrapper>
      <br />
      <br />
      <ComponentWithChildrenWrapper>
        <div> {ReasonReact.string("I am a child")} </div>
        <div> {ReasonReact.string("I am a child 1")} </div>
        <div> {ReasonReact.string("I am a child 2")} </div>
      </ComponentWithChildrenWrapper>
    </div>;
    // since reasomml treats the last statement as ots return type, the UI html has to be the returned type
};