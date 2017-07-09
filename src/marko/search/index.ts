import { renderToString, createBlueprint, linkBlueprint } from "ivi";
import { markoSearchApp, searchResultsItem } from "./ui";

/* tslint:disable:no-var-requires */
const Data = require("./data.json");

function performSearch(input: any): any {
  const pageIndex = input.pageIndex || 0;
  const pageSize = 100;
  const start = pageIndex * pageSize;

  const items = [];

  for (let i = start; i < start + pageSize; i++) {
    items.push(Data.items[i % Data.items.length]);
  }

  return {
    pageIndex: pageIndex,
    totalMatches: Data.items.length,
    items: items,
  };
}

let pageIndex = 0;

function getNextSearchResults(): any {
  return performSearch({ pageIndex: pageIndex++ });
}

const MarkoSearchBlueprint = createBlueprint(
  markoSearchApp({ items: [] }),
);
linkBlueprint(searchResultsItem, createBlueprint(
  searchResultsItem(
    {
      "id": 0,
      "title": "",
      "price": "",
      "image": "",
    },
  ),
));

export function runMarkoSearch() {
  return renderToString(
    markoSearchApp(getNextSearchResults()),
    undefined,
    MarkoSearchBlueprint,
  );
}
