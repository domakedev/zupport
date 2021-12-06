import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

//Component
import CardComunidadShow from "./CardComunidadShow";

test("render content", () => {
  const title = "Hola desde Test";
  const users = 100;
  const checks = 12;
  const image = "ruta de imagen";

  const component = render(<CardComunidadShow title={title} users={users} checks={checks} image={image} />);

  //console.log(component);

  component.getByText("Hola desde Test");
});
