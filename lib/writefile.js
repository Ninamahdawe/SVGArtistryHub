const fs = require("fs");
function saveSVGToFile(fileName, content) {
    fs.writeFileSync(fileName, content);

}
module.exports = { saveSVGToFile };