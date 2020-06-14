open ReasonReact;

type component =
  | ANIMAL
  | PlACES
  | COLORS;

[@react.component]
let make = () => {
  let (currentComponent, setCurrentComponent) = React.useState(() => ANIMAL);

  let changeCurrentComponent = (_, component) =>
    setCurrentComponent(_ => component);

  <div>
    <button onClick={__x => changeCurrentComponent(__x, COLORS)}>
      {string("Color")}
    </button>
    <button onClick={__x => changeCurrentComponent(__x, ANIMAL)}>
      {string("Animals")}
    </button>
    <button onClick={__x => changeCurrentComponent(__x, PlACES)}>
      {string("Places")}
    </button>
    <br />
    <br />
    {switch (currentComponent) {
     | ANIMAL => <AnimalsComponent />
     | PlACES => <PlacesComponent />
     | COLORS => <ColorsComponent />
     }}
  </div>;
};