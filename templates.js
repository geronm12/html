const {
  HTML_TITLE,
  HTML_BODY,
  BOOTSTRAP_CSS,
  BOOTSTRAP_SCRIPT,
  BOOTSTRAP_CSS_SHA,
  BOOTSTRAP_SCRIPT_SHA,
  GFONTS_FUENTE,
  GFONTS_API,
  GFONTS_STATIC,
} = require("./constants");

function createHtmlTemplate() {
  return `<!DOCTYPE html>
    <html lang='es'>
    <head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link 
    href='https://fonts.googleapis.com/icon?family=Material+Icons'
    rel='stylesheet'/>
    <link 
    href="${BOOTSTRAP_CSS}"
    rel='stylesheet' 
    integrity="${BOOTSTRAP_CSS_SHA}" 
    crossorigin='anonymous'/> 
    <link rel='preconnect' 
    href="${GFONTS_API}" /> 
    <link rel='preconnect' 
    href="${GFONTS_STATIC}" 
    crossorigin /> 
    <link 
    href="${GFONTS_FUENTE}"
    rel='stylesheet'/> 
    <link rel='stylesheet' 
    type='text/css' 
    href='./css/styles.css' /> 
    <title>${HTML_TITLE}</title> 
    </head> <body> <h1>${HTML_BODY}</h1></body>
     <script 
     src="${BOOTSTRAP_SCRIPT}" 
     integrity="${BOOTSTRAP_SCRIPT_SHA}"
     crossorigin='anonymous'>
     </script> </html>`;
}

function createCssTemplate() {
  return "body {text-align: center;} h1 { color: red; }";
}

module.exports = { createHtmlTemplate, createCssTemplate };
