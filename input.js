const net = require("net");
const { connect }  = require("./client");

const movement = {
  w: "Move: up",
  a: "Move: left",
  s: "Move: down",
  d: "Move: right"
  }

  // const message = {
  //   q: "RUN AWAY",
    // e: "Hello",
    // z: "THIS IS MY KINGDOM",
    // x: "Meow"
    // }

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
  // if (key === 'q') {
  //     connection.write(message.q); 
  // }
  // if (key === 'e') {
  //   connection.write(message.e); 
  // }
  // if (key === 'z') {
  // connection.write(message.z); 
  // }
  // if (key === 'x') {
  // connection.write(message.x); 
  // }
  if (key === '\u0003') {
    process.exit();
  }
};

module.exports =  { setupInput };