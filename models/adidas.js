const mongoose = require("mongoose");
const Joi = require("joi");

const adidasSchema = new mongoose.Schema({
  colorway: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  tech: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  category: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },

  designer: {
    type: String,
    minlength: 3,
    maxlength: 30,
    required: true
  },
  releaseDate: {
    type: Date,
    default: Date.now()
  }
});

const Adidas = mongoose.model("Adidas", adidasSchema);

function validateAdidas(adidas) {
  const schema = {
    colorway: Joi.string()
      .min(3)
      .required(),
    tech: Joi.string()
      .min(3)
      .required(),
    category: Joi.string()
      .min(3)
      .required(),
    designer: Joi.string()
      .min(3)
      .required(),
    releaseDate: Joi.string().min(3)
  };
  return Joi.validate(adidas, schema);
}

exports.adidasSchema = adidasSchema;
exports.Adidas = Adidas;
exports.validate = validateAdidas;
