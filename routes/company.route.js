const { Router } = require("express");

const companyCtr = require("../controllers/company.ctr");
const allowTo = require("../middlewares/allowTo");
const { roles } = require("../constants");
const companyValidation = require("../middlewares/validations/company.validation");
const validate = require("../middlewares/ValidationHandler");

const router = Router();

router.get("/applications/:jobId", companyCtr.getApplicationListByJob);
router.post("decline/:jobId/:applicationId", companyCtr.declineJob);
router.get("/", companyCtr.getCompanyByAccount);

// router.post(
//   "/",
//   allowTo(roles.company),
//   companyValidation,
//   validate,
//   companyCtr.createCompany
// );

module.exports = router;
