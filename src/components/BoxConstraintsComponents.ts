import { convertValue } from "../util";
import { RangeValue } from "./styleMap/rangeValue";

type BoxComponentsKey = "width";

export const widgetMap = {
  width: RangeValue,
  height: RangeValue,
};

export class BoxConstraintsComponents implements StyleComponentsClassInterface {
  private key: BoxComponentsKey;
  private value: string;
  private valueFormal: ValueFormatType;
  constructor(key: BoxComponentsKey, valueFormat: ValueFormatType) {
    this.key = key;
    this.valueFormal = valueFormat;
  }
  public setValue(config) {
    this.value = config;
  }

  public getValue() {
    const convertedValue = convertValue(this.value);
    const widget = widgetMap[this.key];
    if (widget) {
      return widget(convertedValue, this.key);
    } else {
      return {
        key: this.key,
        value: convertedValue,
      };
    }
  }
}
