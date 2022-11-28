const vscode = require("vscode");
const templates = require("./templates");
const fileCreator = require("./logic");
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let newFiles = vscode.commands.registerCommand(
    "html.createFiles",
    function (uri) {
      try {
        fileCreator.createFiles(
          templates.createHtmlTemplate(),
          templates.createCssTemplate(),
          uri.fsPath
        );
      } catch (err) {
        vscode.window.showErrorMessage(err);
      }
    }
  );

  context.subscriptions.push(newFiles);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
