const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("API home Page");
});

module.exports = router;
