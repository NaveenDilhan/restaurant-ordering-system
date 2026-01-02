const Order = require("../models/Order");
const { getIO } = require("../sockets/socket");

exports.createOrder = async (req, res) => {
  const order = await Order.create(req.body);
  getIO().emit("orderUpdate", order);
  res.json(order);
};
