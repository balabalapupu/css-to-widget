import { convertValue } from "../util";

type BaseComponentsKey = "FontWeight" | "fontSize" | "fontFamily";

export const fontWeight = {
  100: "FontWeight.w100",
  200: "FontWeight.w200",
  300: "FontWeight.w300",
  400: "FontWeight.w400",
  500: "FontWeight.w500",
  600: "FontWeight.w600",
  700: "FontWeight.w700",
  800: "FontWeight.w800",
  900: "FontWeight.w900",
};

export const widgetMap = {
  fontWeight: fontWeight,
};

export class BaseComponents implements StyleComponentsClassInterface {
  private key: BaseComponentsKey;
  private value: string;
  private valueFormat: ValueFormatType;
  constructor(key: BaseComponentsKey, valueFormat: ValueFormatType) {
    this.key = key;
    this.valueFormat = valueFormat;
  }
  public setValue(config) {
    this.value = config;
  }
  public getValue() {
    const convertedValue = convertValue(this.value, this.valueFormat);
    if (widgetMap[this.key]) {
      const curWidgetList = widgetMap[this.key];
      return {
        key: this.key,
        value: curWidgetList[this.value] ?? convertedValue,
      };
    } else {
      return {
        key: this.key,
        value: convertedValue,
      };
    }
  }
}
