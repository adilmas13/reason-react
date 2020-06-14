[@react.component]
let make = () => {
  open ReactDOMRe.Style;
  let logoWrapper =
    make(
      ~display="flex",
      ~justifyContent="center",
      ~paddingTop="10px",
      ~paddingBottom="10px",
      (),
    );
  let logoStyle = make(~height="70px", ~width="70px", ());
  let reactLogoStyle = combine(logoStyle, make(~marginLeft="10px", ()));

  <div style=logoWrapper>
    <img src="assets/logo/reasonlogo.png" style=logoStyle />
    <img src="assets/logo/reactlogo.png" style=reactLogoStyle />
  </div>;
};