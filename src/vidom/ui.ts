import { Component, componentFactory, mapRange } from "ivi";
import * as h from "ivi-html";

function App(childrenNum: number) {
  return h.div("app").children(
    header(childrenNum),
    content(childrenNum),
    footer(childrenNum),
  );
}
export const vidomApp = componentFactory(App);

class Header extends Component<number> {
  render() {
    return h.div("header").children(mapRange(0, this.props, (i) => (
      h.div().attrs({ id: "header-" + i++ }).key(i)
    )));
  }
}
const header = componentFactory(Header);

function StaticContainer() {
  return h.div().children(h.div().children(h.div().children(h.div().children("div"))));
}
export const staticContainer = componentFactory(StaticContainer);

class Content extends Component<number> {
  render() {
    return h.div("content").children(mapRange(0, this.props, (i) => (
      h.b().children("bold" + i),
      h.span("link")
        .children(link({ href: "/", value: "link-" + i }).key(i)),
      h.i().children("italic" + i++),
      staticContainer()
    )));
  }
}
const content = componentFactory(Content);

class Link extends Component<{ href: string, value: string }> {
  render() {
    const props = this.props;
    return h.a()
      .attrs({ href: props.href })
      .children(props.value);
  }
}
const link = componentFactory(Link);

class Footer extends Component<number> {
  render() {
    return h.div("footer").children(mapRange(0, this.props, (i) => (
      h.div().attrs({ id: "footer-" + i++ }).key(i)),
    ));
  }
}
const footer = componentFactory(Footer);
