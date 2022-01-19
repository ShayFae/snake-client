const net = require('net');
// const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Hello!');
    conn.write('Name: IN');
  });

  return conn;
};

module.exports =  connect ;