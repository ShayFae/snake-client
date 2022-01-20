const net = require("net");
const { connect }  = require("./client");

const movement = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
  }

  const test = "Say: You need to... "
  const go = 'RUN!!!'
  const ruler = "Say: This is my kingdom! "
  const greet = "Say: Hi :)"
  // const speach = {
  //   q: "Say: RUN",
  //   }

let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;

};



const handleUserInput = function (key) {
  if (key === 'w') {
    connection.write(movement.w);
  }
  if (key === 'a') {
    connection.write(movement.a);
  }
  if (key === 's') {
    connection.write(movement.s);
  }
  if (key === 'd') {
    connection.write(movement.d);
  }
  if (key === 'q') {
    connection.write(test + go); 
}
if (key === 'e') {
    connection.write(ruler); 
}
if (key === 'z') {
    connection.write(greet); 
}
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports =  { setupInput };