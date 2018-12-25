const express = require("express");
const { Adidas, validate } = require("../models/adidas");
const router = express.Router();

router.get("/", async (req, res) => {
  const adidas = await Adidas.find();
  res.send(adidas);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  const request = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  let adidas = new Adidas({
    colorway: request.colorway,
    tech: request.tech,
    releaseDate: request.releaseDate,
    category: request.category,
    designer: request.designer
  });
  adidas = await adidas.save();

  res.send(adidas);
});
module.exports = router;
