import { Suite } from "benchmark";
import { runMarkoSearch } from "./marko/search";
import { runMarkoColor } from "./marko/color";
import { runRax } from "./rax";
import { runVidom } from "./vidom";
import { runMedium } from "./medium";

new Suite()
    .add("marko-search", function () { runMarkoSearch(); })
    .add("marko-color", function () { runMarkoColor(); })
    .add("rax", function () { runRax(); })
    .add("vidom", function () { runVidom(); })
    .add("medium", function () { runMedium(); })
    .on("cycle", function (event: any) { console.log(event.target.toString()); })
    .run();
