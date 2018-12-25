const express = require("express");
const router = express.Router();
const { Nike, validate } = require("../models/nike");

router.get("/", async (req, res) => {
  const nike = await Nike.find();

  res.send(nike);
});

router.post("/", async (req, res) => {
  const { error } = validate(req.body);
  const request = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  let nike = new Nike({
    colorway: request.colorway,
    tech: request.tech,
    releaseDate: request.releaseDate,
    category: request.category,
    designer: request.designer
  });
  nike = await nike.save();
  res.send(nike);
});

router.put("/:id", async (req, res) => {
  const { error } = validate(req.body);
  const request = req.body;
  if (error) return res.status(400).send(error.details[0].message);

  const nike = await Nike.findByIdAndUpdate(
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

  if (!nike)
    return res.status(404).send("The Nike id with the given id was not found ");
  res.send(nike);
});

router.delete("/:id", async (req, res) => {
  const nike = await Nike.findByIdAndRemove(req.params.id);

  if (!nike) return res.status(404).send("The Nike id given was not found");
  res.send("data");
});

router.get("/:id", async (req, res) => {
  const nike = await Nike.findById(req.params.id);

  if (!nike)
    return res.status(404).send("The Nike given id provided was not found");

  res.send(nike);
});
module.exports = router;
