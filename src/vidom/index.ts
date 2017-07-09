import { createBlueprint, linkBlueprint, renderToString } from "ivi";
import { vidomApp, staticContainer } from "./ui";

const VidomBlueprint = createBlueprint(vidomApp(0));
linkBlueprint(staticContainer, createBlueprint(staticContainer()));

export function runVidom() {
  return renderToString(
    vidomApp(200),
    undefined,
    VidomBlueprint,
  );
}
