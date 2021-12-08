import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";

import Answer from "./Answer";

test("Imprimir caja de respuesta nueva", () => {
  const state = {
    field: "Cesar",
    validated: true
  };

  const textPlaceholder = "Lindo Placeholder!!!!";

  const component = render(<Answer textPlaceholder={textPlaceholder} />);

  const input = component.getByPlaceholderText(textPlaceholder);

  //component.debug()

  expect(input).toBeInTheDocument();
});




test("Imprimir caja de respuesta validada", () => {

  const state = {
    field: "La respuesta es 8",
    validated: true
  };

  const textPlaceholder = "Escribe tu respuesta aqui...";

  const component = render(<Answer state={state} textPlaceholder={textPlaceholder} />);

  const input = component.getByPlaceholderText(textPlaceholder);

  //component.debug()

  console.log(input.value);

  expect(input.value).toBe("La respuesta es 8");
});
