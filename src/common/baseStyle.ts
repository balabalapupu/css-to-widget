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
      if (ignoreKey.includes(item.styleKey)) {
        return;
      }
      const currentComponentList: StyleComponentsType = styleMap.find(
        (_item) => _item.originKey == item.styleKey
      );
      if (!currentComponentList) {
        throw new Error("检查圈选范围，是否有key没圈选全");
      }
      const __value = item.styleValue.trim();
      const {
        components: curStyleComponent,
        key: curStylekey,
        valueFormat: curStyleValueFormat,
        decorator: curDecorator = "insert",
      } = currentComponentList;
      const curClass = new curStyleComponent(
        curStylekey,
        curStyleValueFormat,
        currentComponentList
      );
      curClass.setValue(__value);
      const curClassOutput = curClass.getValue();

      // 输出字符串 or 数组
      if (Array.isArray(curClassOutput)) {
        curClassOutput.forEach((__item) => {
          result.push({
            type: curDecorator,
            str: `${__item.key}: ${__item.value},\n`,
          });
        });
      } else {
        result.push({
          type: curDecorator,
          str: `${curClassOutput.key}: ${curClassOutput.value},\n`,
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
    BoxConstraints: [],
  };

  config.forEach((item) => {
    if (item.type === "insert") {
      result.insert.push(item.str);
    } else if (item.type === "BoxDecoration") {
      result.BoxDecoration.push(item.str);
    } else if (item.type == "BoxConstraints") {
      result.BoxConstraints.push(item.str);
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
  if (result.BoxConstraints.length > 0) {
    resultStr += `constraints: BoxConstraints(\n${result.BoxConstraints.join(
      ""
    )}),\n`;
  }

  return resultStr;
}
