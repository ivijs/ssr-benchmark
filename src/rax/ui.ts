import { Context, componentFactory, connect, selectorData, map } from "ivi";
import * as h from "ivi-html";

const BannerStyles = {
  container: {
    width: "900px",
    margin: "30px auto",
    border: "1px solid #eee",
    padding: "20px",
  },
  list: {
    overflow: "hidden",
  },
  item: {
    float: "left",
    width: "175px",
    marginRight: "20px",
  },
  itemImg: {
    width: "100%",
    height: "100px",
    marginBottom: "10px",
  },
};

const ListStyles = {
  container: {
    width: "900px",
    margin: "30px auto",
    border: "1px solid #eee",
    padding: "20px",
  },
  list: {
    overflow: "hidden",
  },
  item: {
    float: "left",
    width: "175px",
    marginRight: "20px",
  },
  itemImg: {
    width: "100%",
    height: "100px",
  },
  itemTitle: {
    height: "30px",
    lineHeight: "30px",
  },
  itemPrice: {
    height: "30px",
    lineHeight: "30px",
  },
};

function App() {
  return h.div("app")
    .children(banner(), list());
}
export const raxApp = componentFactory(App);

function BannerItem(img: string) {
  return h.div().style(BannerStyles.item)
    .children(h.img().style(BannerStyles.itemImg).attrs({ src: img }));
}
export const bannerItem = componentFactory(BannerItem);

function Banner(data: any[]) {
  return h.div().style(BannerStyles.container).children(
    h.h2().children("ivi Banner: "),
    h.div().style(BannerStyles.list)
      .children(map(data, (item: any, idx: number) => bannerItem(item.img).key(idx))));
}
const banner = connect(
  function (prev: any, props: null, context: Context<{ bannerData: any[] }>) {
    const bannerData = context.bannerData;
    if (prev !== null && prev.in === bannerData) {
      return prev;
    }
    return selectorData(bannerData);
  },
  Banner,
);

function ListItem(item: { href: string, img: string, title: string, price: number }) {
  return h.a().style(ListStyles.item).attrs({ href: item.href }).children(
    h.img().style(ListStyles.itemImg),
    h.p().style(ListStyles.itemTitle).children(item.title),
    h.p().style(ListStyles.itemPrice).children(
      h.span().children(`price: ${item.price}`),
    ),
  );
}
export const listItem = componentFactory(ListItem);

function List(data: any[]) {
  return h.div().style(ListStyles.container).children(
    h.h2().children("iviList "),
    h.div().style(ListStyles.list).children(
      map(data, (item: any, idx: number) => listItem(item).key(idx)),
    ),
  );
}
const list = connect(
  function (prev: any, props: null, context: Context<{ listData: any[] }>) {
    const listData = context.listData;
    if (prev !== null && prev.in === listData) {
      return prev;
    }
    return selectorData(listData);
  },
  List,
);
