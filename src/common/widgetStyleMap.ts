import { BaseComponents } from "../components/baseComponents";
import { ColorComponents } from "../components/colorComponents";
import { EdgeComponents } from "../components/edgeComponents";
const baseComponentsList: StyleDetailInfoType[] = [
  {
    components: BaseComponents,
    key: "fontSize",
    originKey: "font-size",
    valueFormat: "pixel",
  },
  {
    components: BaseComponents,
    key: "letterSpacing",
    originKey: "letter-spacing",
    valueFormat: "normal",
  },
  {
    components: BaseComponents,
    key: "fontWeight",
    originKey: "font-weight",
    valueFormat: "normal",
  },
  {
    components: BaseComponents,
    key: "fontFamily",
    valueFormat: "string",
    originKey: "font-family",
  },
];

const edgeComponentsList: StyleDetailInfoType[] = [
  {
    components: EdgeComponents,
    key: "border",
    decorator: "BoxDecoration",
    originKey: "border",
  },
  {
    components: EdgeComponents,
    key: "borderRadius",
    decorator: "BoxDecoration",
    originKey: "border-radius",
  },
  {
    components: EdgeComponents,
    key: "padding",
    originKey: "padding",
  },
  {
    components: EdgeComponents,
    key: "padding",
    direction: "left",
    originKey: "padding-left",
  },
  {
    components: EdgeComponents,
    key: "padding",
    direction: "top",
    originKey: "padding-top",
  },
  {
    components: EdgeComponents,
    key: "padding",
    direction: "right",
    originKey: "padding-right",
  },
  {
    components: EdgeComponents,
    key: "padding",
    direction: "bottom",
    originKey: "padding-bottom",
  },
  {
    components: EdgeComponents,
    key: "margin",
    originKey: "margin",
  },
  {
    components: EdgeComponents,
    key: "margin",
    direction: "left",
    originKey: "margin-left",
  },
  {
    components: EdgeComponents,
    key: "margin",
    direction: "right",
    originKey: "margin-right",
  },
  {
    components: EdgeComponents,
    key: "margin",
    direction: "top",
    originKey: "margin-top",
  },
  {
    components: EdgeComponents,
    key: "margin",
    direction: "bottom",
    originKey: "margin-bottom",
  },
];
const colorComponentsList: StyleDetailInfoType[] = [
  {
    components: ColorComponents,
    key: "color",
    decorator: "BoxDecoration",
    originKey: "background",
  },
  {
    components: ColorComponents,
    key: "color",
    originKey: "color",
  },
];
export const styleMap: StyleDetailInfoType[] = [
  ...baseComponentsList,
  ...edgeComponentsList,
  ...colorComponentsList,
];
