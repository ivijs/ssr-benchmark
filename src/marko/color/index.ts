import { renderToString } from "ivi";
import { markoColorApp } from "./ui";

/* tslint:disable:no-var-requires */
const Colors = require("./colors.json");

export function runMarkoColor() {
  return renderToString(
    markoColorApp(),
    {
      colors: Colors,
      selectedColor: {
        id: 0,
        name: Colors[0].name,
      },
    },
  );
}
