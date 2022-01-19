const net = require("net");
// const connect = require("./client");
// const connect = require("./client");
const connect = require("./client");
const setupInput = require("./input");

// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '99.248.219.172',
//     port: 50541
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     console.log('Hello!')
//     // code that does something when the connection is first established
//   });
//   // conn.on("event name", () => {
//   //   // code that does something
//   // });
//   // conn.on("event name", functionThatDoesSomething);

//   return conn;
// };

// const setupInput = function () {
//   const stdin = process.stdin;
//   stdin.setRawMode(true);
//   stdin.setEncoding("utf8");
//   stdin.resume();
//   stdin.on("data", handleUserInput);
//   return stdin;
// };

// const handleUserInput = function () {
//   // your code here
//   if (key === '\u0003') {
//     process.exit();
//   }
// };

console.log("Connecting ...");
setupInput(connect());



// const net = require("net");

// // establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: // IP address here,
//     port: // PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   return conn;
// };

// console.log("Connecting ...");
// connect();