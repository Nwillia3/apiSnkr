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

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  const request = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  const adidas = await Adidas.findByIdAndUpdate(
    req.params.id,
    {
      colorway: request.colorway,
      tech: request.tech,
      releaseDate: request.releaseDate,
      category: request.category,
      designer: request.designer
    },
    { new: true }
  );

  if (!adidas)
    return res.status(404).send("The Nike id with the given id was not found ");
  res.send(adidas);
});

router.delete("/:id", async (req, res) => {
  const adidas = await Adidas.findByIdAndRemove(req.params.id);

  if (!adidas)
    return res.status(404).send("The Nike id with the given id was not found ");
  res.send(adidas);
});

router.get("/:id", async (req, res) => {
  const adidas = await Adidas.findById(req.params.id);

  if (!adidas)
    return res.status(404).send("The Nike id with the given id was not found ");
  res.send(adidas);
});

module.exports = router;
