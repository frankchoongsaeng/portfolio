const fs = require("fs");
const path = require("path");

function readFile(callback) {

  console.log(path.normalize("../../public"));
  fs.readFile(path.normalize("public/vercel.svg"), (err, data) => {
    return console.log(err);

    callback(data)
  })
}

export default (req, res) => {

  readFile(data => {
    res.status(200).send(data);
  })
}
