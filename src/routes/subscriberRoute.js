const express = require("express");
const router = express.Router();
const {
  getSubscribers,
  getSubscriberNames,
  getSubscriberById,
} = require("../controllers/subscriberController");

// Define routes and associate them with controller functions
router.route("/subscribers").get(getSubscribers);
router.route("/subscribers/names").get(getSubscriberNames);
router.route("/subscribers/:id").get(getSubscriberById);

module.exports = router;
