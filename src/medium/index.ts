import { createBlueprint, renderToString } from "ivi";
import { mediumApp } from "./ui";

const MediumBlueprint = createBlueprint(
  mediumApp(),
  {
    title: "",
    saved: false,
    content: "",
  },
);

export function runMedium() {
  return renderToString(
    mediumApp(),
    {
      title: "Draft",
      saved: true,
      content: "Hello World",
    },
    MediumBlueprint,
  );
}
