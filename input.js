const net = require("net");

let connection;

const setupInput = (conn) => {
  connection = conn;
};

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function () {
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports = setupInput;

// console.log('My snake moves up', movement.w)
// console.log('My snake moves left', movement.a)
// console.log('My snake moves down', movement.s)
// console.log('My snake moves right', movement.d)

// const movement = {
// w: "Move: up",

// a: "Move: left",

// s: "Move: down",

// d: "Move: right"
// }

