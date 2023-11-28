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

export class BaseComponents {
  private key: BaseComponentsKey;
  private value: string;
  private valueFormal: ValueFormatType;
  constructor(key: BaseComponentsKey, valueFormat: ValueFormatType) {
    this.key = key;
    this.valueFormal = valueFormat;
  }
  public setValue(config) {
    this.value = config;
  }
  public getValue() {
    const convertedValue = this.convertValue(this.value);
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
  convertValue(value) {
    if (this.valueFormal == "pixel") {
      return this.value.replace("px", "");
    } else if (this.valueFormal == "string") {
      return `'${value}'`;
    }
    return value;
  }
}