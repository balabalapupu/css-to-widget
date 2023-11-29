import { BorderInset } from "./styleMap/borderInset";
import { BorderRadius } from "./styleMap/borderRadius";
import { EdgeInset } from "./styleMap/edgeInset";

type edgeComponentsKey = "borderRadius" | "padding";

export const widgetMap = {
  padding: EdgeInset,
  margin: EdgeInset,
  borderRadius: BorderRadius,
  border: BorderInset,
};

export class EdgeComponents implements StyleComponentsClassInterface {
  private key: edgeComponentsKey;
  private value: any;
  private valueFormal: ValueFormatType;
  private direction: string;
  constructor(
    key: edgeComponentsKey,
    valueFormat: ValueFormatType,
    arg: StyleComponentsType
  ) {
    this.key = key;
    this.valueFormal = valueFormat;
    this.direction = arg.direction ?? "";
  }
  public setValue(value: any): void {
    this.value = value;
  }
  public getValue(): OutPutType {
    if (widgetMap[this.key]) {
      const curWidgetList = widgetMap[this.key];
      return {
        key: this.key,
        value: curWidgetList(this.value, this.direction),
      };
    }
  }
}
