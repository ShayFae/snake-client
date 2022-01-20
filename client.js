const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
   
  });

  // let message = "Hi"
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Hello!');
    conn.write('Name: IN');
  });

  return conn;
};

module.exports =  { connect };
