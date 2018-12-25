const express = require("express");
const app = express();
const nike = require("./routes/nike");
const adidas = require("./routes/adidas");
const mongoose = require("mongoose");

// connect mongodb
mongoose
  .connect("mongodb://localhost/SnkrDir")
  .then(() => console.info("connected to DB"))
  .catch(err => console.error("Cannot connect to DB"));

app.use(express.json());
app.use("/api/nike", nike);
app.use("/api/adidas", adidas);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
