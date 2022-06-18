const { printName, lastName } = require("./printName");
const os = require("os");

printName(`Mateus ${lastName}`);

console.log(os.type());
