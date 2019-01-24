const router = require("express").Router();
const budgetsControllers = require("../../controllers/budgetsControllers")

// Match with /api
router.route("/createbudget")
    .post(budgetsControllers.createbudget);

router.route("/getbudget")
    .get(budgetsControllers.getbudget)

router.route("/deletexpense/:id")
    .delete(budgetsControllers.removeexpense);

router.route("/updatexpense/:id")
    .put(budgetsControllers.updateexpense);

router.route("/getmybudget/:username/:month/:year")
    .get(budgetsControllers.getonebudget)



module.exports = router;