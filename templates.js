function createHtmlTemplate() {
  return (
    "<!DOCTYPE html>" +
    "<html lang='es'>" +
    "<head>" +
    "<meta charset='UTF-8'>" +
    "<meta http-equiv='X-UA-Compatible' content='IE=edge'>" +
    "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" +
    "<link " +
    "href='https://fonts.googleapis.com/icon?family=Material+Icons'" +
    "rel='stylesheet'/>" +
    "<link " +
    "href='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css'" +
    "rel='stylesheet'" +
    "integrity='sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65'" +
    "crossorigin='anonymous'/>" +
    "<link rel='preconnect' href='https://fonts.googleapis.com' />" +
    "<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />" +
    "<link " +
    "href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'" +
    " rel='stylesheet'/>" +
    "<link rel='stylesheet' type='text/css' href='./css/styles.css' />" +
    "<title>Rolling Code 33i</title>" +
    "</head>" +
    "<body><h1>Hola Mundo</h1>" +
    "<script " +
    "src='https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js'" +
    "integrity='sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4'" +
    "crossorigin='anonymous'></script>" +
    "</body>" +
    "</html>"
  );
}

function createCssTemplate() {
  return "body {text-align: center;} h1 { color: red; }";
}

module.exports = { createHtmlTemplate, createCssTemplate };
