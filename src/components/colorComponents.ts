import { ColorInset } from "./styleMap/colorInset";

type colorComponentsKey = "color";

export const widgetMap = {
  color: ColorInset,
};

export class ColorComponents implements StyleComponentsClassInterface {
  private key: colorComponentsKey;
  private value: string;
  private valueFormat: ValueFormatType;
  private direction: string;
  constructor(
    key: colorComponentsKey,
    valueFormat: ValueFormatType,
    arg: StyleComponentsType
  ) {
    this.key = key;
    this.valueFormat = valueFormat;
    this.direction = arg.direction ?? "";
  }
  public setValue(config) {
    this.value = config;
  }
  public getValue() {
    if (widgetMap[this.key]) {
      const curWidgetList = widgetMap[this.key];
      return {
        key: this.key,
        value: curWidgetList(this.value),
      };
    }
  }
}
