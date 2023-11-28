import * as vscode from "vscode";
import { styleMap } from "./widgetStyleMap";

export function convertCssToBaseStyleMap(text): BaseStyleList[] {
  try {
    const cssArr: string[] = text
      .split(";")
      .map((str) => str.trim()) // 去空格
      .filter((item) => item); // 去空

    const baseStyleArr = [];
    cssArr.forEach((item) => {
      const parts = item.split(":");
      if (parts.length !== 2) {
        throw new Error("检查圈选范围，是否有字符串无法被 ':' 分割成两个部分");
      }
      baseStyleArr.push({
        styleKey: parts[0],
        styleValue: parts[1],
      });
    });
    return baseStyleArr;
  } catch (error) {
    vscode.window.showInformationMessage(`【异常】${error}`);
  }
  return [];
}
const ignoreKey = ["line-height"];

export function convertStyleListToWidgetList(
  styleList: BaseStyleList[]
): WidgetListType[] {
  const result = [];
  try {
    styleList.forEach((item) => {
      if (!ignoreKey.includes(item.styleKey)) {
        const currentComponentList: StyleDetailInfoType = styleMap.find(
          (_item) => _item.originKey == item.styleKey
        );
        if (!currentComponentList) {
          throw new Error("检查圈选范围，是否有key没圈选全");
        }
        const __value = item.styleValue.trim();
        const curStyleComponent = currentComponentList.components;
        const curStylekey = currentComponentList.key;
        const curStyleValueFormat = currentComponentList.valueFormat ?? null;
        const curClass = new curStyleComponent(
          curStylekey,
          curStyleValueFormat,
          currentComponentList
        );
        curClass.setValue(__value);
        const curClassOutput = curClass.getValue();
        const str = `${curClassOutput.key}: ${curClassOutput.value},\n`;
        result.push({
          type: currentComponentList?.decorator ?? "insert",
          str,
        });
      }
    });
    return result;
  } catch (error) {
    vscode.window.showInformationMessage(`【异常】${error}`);
  }
}

export function createOutPut(config: WidgetListType[]): string {
  const result = {
    insert: [],
    BoxDecoration: [],
  };

  config.forEach((item) => {
    if (item.type === "insert") {
      result.insert.push(item.str);
    } else if (item.type === "BoxDecoration") {
      result.BoxDecoration.push(item.str);
    }
  });

  let resultStr = "";
  if (result.insert.length > 0) {
    resultStr += result.insert.join("");
  }
  if (result.BoxDecoration.length > 0) {
    resultStr += `decoration: BoxDecoration(\n${result.BoxDecoration.join(
      ""
    )}),\n`;
  }

  return resultStr;
}
