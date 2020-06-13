
open ReasonReact;

type component = |ANIMAL | PlACES| COLORS;

[@react.component]
let make = () => {

    let (currentComponent, setCurrentComponent) = React.useState(() => ANIMAL);

    let changeCurrentComponent =(_, component) => setCurrentComponent(_ => component);

    <div>
        <button onClick=changeCurrentComponent(_, COLORS)>{string("Color")}</button>
         <button onClick=changeCurrentComponent(_, ANIMAL)>{string("Animals")}</button>
          <button onClick=changeCurrentComponent(_, PlACES)>{string("Places")}</button>
          <br/>
      {
          switch (currentComponent) {
          | ANIMAL => <AnimalsComponent/>
          | PlACES => <PlacesComponent/>
          | COLORS => <ColorsComponent/>
          };
      }
    </div>;
}