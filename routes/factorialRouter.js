
var router = require("express").Router();
const factorialNumberController = require("../controllers/factorialNumberController");

/* post input number. */

router.post("/factorialCheck", factorialNumberController.factorialNum);



module.exports = router;
