const { Router } = require("express");
const allowTo = require("../middlewares/allowTo");
const { roles } = require("../constants");
const profileCtr = require("../controllers/profile.ctr");
const userProfileValidation = require("../middlewares/validations/userProfile.validation");
const validate = require("../middlewares/ValidationHandler");

const router = Router();

router.post(
  "/",
  allowTo(roles.employee),
  userProfileValidation,
  validate,
  profileCtr.createUserProfile
);

router.get("/", profileCtr.getAccountProfile);

module.exports = router;
