const express = require("express");
const { isAuthenticated, isSignedIn } = require("../controllers/auth");
const router = express.Router();
const { makepayment } = require("../controllers/stripePayment");

router.post("/stripepayment", isSignedIn, isAuthenticated, makepayment);

module.exports = router;
