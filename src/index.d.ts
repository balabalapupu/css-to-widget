type BaseStyleList = {
  styleKey: string;
  styleValue: string;
};
type ValueFormatType = "normal" | "pixel" | "string";
type StyleDetailInfoType = {
  components: any;
  key: string;
  valueFormat?: ValueFormatType;
  decorator?: string;
  direction?: string;
  originKey: string;
};
type StyleMapType = {
  [propName: string]: StyleDetailInfoType;
};
type WidgetListType = {
  type: string;
  str: string;
};
