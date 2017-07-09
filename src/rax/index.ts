import { createBlueprint, linkBlueprint, renderToString } from "ivi";
import { raxApp, bannerItem, listItem } from "./ui";

const RaxBlueprint = createBlueprint(raxApp(), { bannerData: [], listData: [] });
linkBlueprint(bannerItem, createBlueprint(bannerItem("")));
linkBlueprint(listItem, createBlueprint(listItem({ title: "", img: "", href: "", price: 0 })));

const listData = Array.from({ length: 100 })
  .map((undef, i) => {
    return {
      title: "Product title " + i,
      img: "https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg",
      href: "https://github.com",
      price: 20,
    };
  });

const bannerData = Array.from({ length: 6 })
  .map((undef, i) => {
    return {
      title: "banner " + i,
      img: "https://img.alicdn.com/tps/TB13keMLXXXXXbmXVXXXXXXXXXX-900-500.jpg",
    };
  });

export function runRax() {
  return renderToString(
    raxApp(),
    { bannerData, listData },
    RaxBlueprint,
  );
}
