import * as vscode from "vscode";
import { checkInputTextFormat, checkObjectUndefined } from "./util";
import {
  convertCssToBaseStyleMap,
  convertStyleListToWidgetList,
  createOutPut,
} from "./common/baseStyle";

export const ConvertCSSToWidget = (document: any) => {
  if (checkObjectUndefined(document)) return;

  const global = vscode.window;
  const editor = global.activeTextEditor;

  if (!editor) return;

  // 获取当前选中的文字
  const text = document.getText(editor?.selection);
  if (!checkInputTextFormat(text)) {
    vscode.window.showInformationMessage("当前格式不符合预期");
    return;
  }

  const StyleList: BaseStyleList[] = convertCssToBaseStyleMap(text);

  const widgetConfig = convertStyleListToWidgetList(StyleList);

  const str = createOutPut(widgetConfig);

  editor.edit((editBuilder) => {
    editBuilder.replace(editor.selection, str);
  });
  vscode.window.showInformationMessage("转换成功");
};
