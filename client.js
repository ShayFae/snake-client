const net = require('net');


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });

  // interpret incoming data as text

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Hello!');
    // conn.write('Lets play!');
    conn.write('Name: IN');
    // conn.write('Move: Up');
    setTimeout(() => {
      conn.write('Move: Up');

    }, 1000);
    setTimeout(() => {
      conn.write('Move: down');
      // conn.write('Move: Up');
    }, 2000);

    setTimeout(() => {
      conn.write('Move: down');
      // conn.write('Move: Up');
    }, 3000);
    setTimeout(() => {
      conn.write('Move: left');
    }, 4000);
    setTimeout(() => {
      conn.write('Move: right');
      conn.write('Move: right');
      conn.write('Move: right');
    }, 5000);
    setTimeout(() => {
      conn.write('Move: down');
      // conn.write('Move: Up');
    }, 7000);
    setTimeout(() => {
      conn.write('Move: left');
    }, 9000);
    setTimeout(() => {
      conn.write('Move: down');
      // conn.write('Move: Up');
    }, 10000);
    setTimeout(() => {
      conn.write('Move: left');
    }, 13000);
    
    // console.log("Move: up")
  });
  // // conn.on("event name", () => {
  // //   // code that does something
  // // });
  // // conn.on("event name", functionThatDoesSomething);
  return conn;
};

module.exports = connect;

