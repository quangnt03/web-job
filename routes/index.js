const { Router } = require("express");

const authRoutes = require("./auth.route");
const profileRoutes = require("./profile.route");
const companyRoutes = require("./company.route");
const accountRoutes = require("./account.route");

const exceptionHandler = require("../middlewares/exceptionHandle");
const requireSignin = require("../middlewares/requireSignin");

const router = Router();

router.use("/auth", authRoutes);

router.use(requireSignin);

router.use("/account", accountRoutes);
router.use("/employee", profileRoutes);
router.use("/company", companyRoutes);

router.use(exceptionHandler);

module.exports = router;
