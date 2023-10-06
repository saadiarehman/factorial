

var router = require("express").Router();
const userController = require("../controllers/userController");
/* GET users listing. */
router.get("/getUser", userController.getUser);
router.put("/updateUser", userController.updateUser);
router.post("/createUser", userController.createUser);
router.delete ("/deleteUser", userController.deleteUser);


module.exports = router;
