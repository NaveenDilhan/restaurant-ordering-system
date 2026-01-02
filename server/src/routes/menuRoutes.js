const router = require("express").Router();
const controller = require("../controllers/menuController");

router.get("/", controller.getMenu);
router.post("/", controller.createItem);
router.put("/:id", controller.updateItem);
router.delete("/:id", controller.deleteItem);

module.exports = router;
