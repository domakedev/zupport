import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

//Component
import NewCommunitie from "./NewCommunitie";

test('should be displayed a plus button', () => {

  const component = render(<NewCommunitie/>);

  component.getByText("Crear nueva Comunidad");

})

