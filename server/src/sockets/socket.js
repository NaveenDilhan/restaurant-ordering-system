const socketIO = require("socket.io");

let io;

module.exports = (server) => {
  io = socketIO(server, {
    cors: { origin: "*" }
  });

  io.on("connection", (socket) => {
    console.log("Client connected");

    socket.on("newOrder", (order) => {
      io.emit("orderUpdate", order);
    });
  });
};

module.exports.getIO = () => io;
