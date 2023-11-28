import * as vscode from "vscode";
import { ConvertCSSToWidget } from "./main";

export function activate(context: vscode.ExtensionContext) {
  console.log('extension "css-to-widget" is now active!');

  vscode.languages.registerCodeActionsProvider("dart", {
    provideCodeActions(document, range) {
      const action = new vscode.CodeAction("convert to widget");
      action.command = {
        command: "css-to-widget",
        title: "convert to widget",
        arguments: [document, range],
      };
      return [action];
    },
  });

  const disposable = vscode.commands.registerCommand(
    "css-to-widget",
    ConvertCSSToWidget
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
