const { Router } = require("express");
const accountCtr = require("../controllers/account.ctr");

const router = Router();

router.get("/", accountCtr.getAccount);

module.exports = router;
