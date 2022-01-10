//node urls.js urls.txt

const urls = require("./urls.txt");

fs.readFile("urls.txt","utf8", function(err,data) {
    if (err) {
        console.log("Couldn't download ${data}")
    }
    else {
        console.log("Wrote to ${data}")
    }
})