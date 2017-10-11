import * as express from "express";
import { runMarkoSearch } from "./marko/search";
import { runMarkoColor } from "./marko/color";
import { runRax } from "./rax";
import { runVidom } from "./vidom";
import { runMedium } from "./medium";

const app = express();
app.get("/marko-search", (req, res) => {
  res.send(runMarkoSearch());
});
app.get("/marko-color", (req, res) => {
  res.send(runMarkoColor());
});
app.get("/rax", (req, res) => {
  res.send(runRax());
});
app.get("/vidom", (req, res) => {
  res.send(runVidom());
});
app.get("/medium", (req, res) => {
  res.send(runMedium());
});
app.listen(3000, function () {
  console.log("SSR benchmark server is running on port 3000");
});
