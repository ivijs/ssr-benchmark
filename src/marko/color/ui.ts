import { Component, connect, selectorData, map } from "ivi";
import * as Events from "ivi-events";
import * as h from "ivi-html";

function selectColor(id: number) {
  // dispatch selectColor action...
}

class Color extends Component<{ id: number, selected: boolean, hex: string, name: string }> {
  private handleClick = Events.onClick((ev) => {
    selectColor(this.props.id);
  });

  render() {
    return h.li(this.props.selected === true ? "color selected" : "color")
      .style({ "background-color": this.props.hex })
      .events(this.handleClick)
      .children(this.props.name);
  }
}
const color = connect(
  function (prev: any, id: number, context: any) {
    const colors = context.colors;
    const selected = context.selectedColor.id === id;
    const c = colors[id];
    if (prev !== null && prev.in.color === c && prev.in.selected === selected) {
      return prev;
    }
    return selectorData({ id, selected, hex: c.hex, name: c.name });
  },
  Color,
);

function ColorApp(props: { colors: any[], selectedColor: any }) {
  const colors = props.colors;

  return h.div("colors").children(
    h.h1().children("Choose your favorite color:"),
    h.div("colors").children(
      colors.length > 0 ?
        h.ul().children(map(colors, (_, i) => color(i).key(i))) :
        h.div().children("No colors!"),
    ),
    h.div().children("You chose:", h.div("chosen-color").children(props.selectedColor.name)),
  );
}
export const markoColorApp = connect(
  function (prev: any, props: null, context: any) {
    const colors = context.colors;
    const selectedColor = context.selectedColor;
    if (prev !== null && prev.in.colors === colors && prev.in.selectedColor === selectedColor) {
      return prev;
    }
    return selectorData({ colors, selectedColor });
  },
  ColorApp,
);
