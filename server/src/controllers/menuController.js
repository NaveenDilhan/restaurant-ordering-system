const MenuItem = require("../models/MenuItem");

exports.getMenu = async (req, res) => {
  res.json(await MenuItem.find());
};

exports.createItem = async (req, res) => {
  res.json(await MenuItem.create(req.body));
};

exports.updateItem = async (req, res) => {
  res.json(await MenuItem.findByIdAndUpdate(req.params.id, req.body));
};

exports.deleteItem = async (req, res) => {
  await MenuItem.findByIdAndDelete(req.params.id);
  res.json({ msg: "Deleted" });
};
