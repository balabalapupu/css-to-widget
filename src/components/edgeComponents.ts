import { BorderRadius } from "./styleMap/borderRadius";
import { EdgeInset } from "./styleMap/edgeInset";

type edgeComponentsKey = "borderRadius" | "padding";

export const widgetMap = {
  padding: EdgeInset,
  margin: EdgeInset,
  borderRadius: BorderRadius,
};

export class EdgeComponents {
  private key: edgeComponentsKey;
  private value: string;
  private valueFormal: ValueFormatType;
  private direction: string;
  constructor(
    key: edgeComponentsKey,
    valueFormat: ValueFormatType,
    arg: StyleDetailInfoType
  ) {
    this.key = key;
    this.valueFormal = valueFormat;
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
        value: curWidgetList(this.value, this.direction),
      };
    }
  }
}
