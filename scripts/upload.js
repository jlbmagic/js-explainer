const open = require("open");
const path = require("path");
const server = "domain.name.server.name";
const file = "C3Demo";
const uploadScript = "UploadToHTML";

const fileUrl = `fmp://${server}/${file}?script=${uploadScript}&param=`;

const thePath = path.join(__dirname, "../", "dist", "index.html");
const url = fileUrl + encodeURIComponent(thePath);
open(url);
