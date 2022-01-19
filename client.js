const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Hello!');
    // conn.write('Lets play!');
    conn.write('Name: Pog');
    // setTimeout(() => {
    //   conn.write('Move: Up');

    // }, 1000);
    // setTimeout(() => {
    //   conn.write('Move: down');
    //   // conn.write('Move: Up');
    // }, 2000);

    // setTimeout(() => {
    //   conn.write('Move: down');
    //   // conn.write('Move: Up');
    // }, 3000);
    // setTimeout(() => {
    //   conn.write('Move: left');
    // }, 4000);
    // console.log("Move: up")
  });

  return conn;
};

module.exports = connect;