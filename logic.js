const vscode = require("vscode");
const fs = require("fs");
const htmlPath = "/index.html";
const cssPath = "/css/styles.css";

/**
 * //String que representa el template html que nosotros queremos crear
 * @param {string} htmlTemplate
 * //String que representa el template css que nosotros queremos crear
 * @param {string} cssTemplate
 */

function createFiles(htmlTemplate, cssTemplate, baseUri) {
  showMessage(
    createWorkspaceFilesAndInserText(baseUri, htmlTemplate, cssTemplate)
  );
}

function createWorkspaceFilesAndInserText(baseUri, htmlTemplate, cssTemplate) {
  const htmlUri = vscode.Uri.file(baseUri + htmlPath);
  const cssUri = vscode.Uri.file(baseUri + cssPath);
  const wsedit = new vscode.WorkspaceEdit();

  if (fs.existsSync(htmlUri.fsPath) || fs.existsSync(cssUri.fsPath))
    return false;

  tryCatch(() => {
    wsedit.createFile(htmlUri, { ignoreIfExists: true });
    wsedit.createFile(cssUri, { ignoreIfExists: true });
    wsedit.insert(htmlUri, new vscode.Position(0, 0), htmlTemplate);
    wsedit.insert(cssUri, new vscode.Position(0, 0), cssTemplate);
    vscode.workspace.applyEdit(wsedit);
    return true;
  });
}

function showMessage(result) {
  if (result) {
    vscode.window.showInformationMessage(
      "Rolling Code 33i <Archivos Creados Correctamente>"
    );
  } else {
    vscode.window.showErrorMessage("El archivo que desea crear ya existe");
  }
}

function tryCatch(trycatcheableFunction) {
  try {
    trycatcheableFunction();
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createFiles,
};
