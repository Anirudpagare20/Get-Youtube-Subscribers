const Subscriber = require("../models/subscribers");

// getSubscribers controller response with all subscribers.
exports.getSubscribers = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({});
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// getSubscriberNames controller response with subscribers having 'name' and 'subscribedChannel' fields.
exports.getSubscriberNames = async (req, res) => {
  try {
    const subscribers = await Subscriber.find({}, "name subscribedChannel");
    res.json(subscribers);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// getSubscriberById controller response with a subscriber by ID, or a 404 error if not found.
exports.getSubscriberById = async (req, res) => {
  try {
    const subscriber = await Subscriber.findById(req.params.id);

    if (!subscriber) {
      return res.status(404).json({ message: "No Subscriber found related to this ID!" });
    }

    res.json(subscriber);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
