const mongoose = require("mongoose");
const Joi = require("joi");

const nikeSchema = new mongoose.Schema({
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

const Nike = mongoose.model("Nike", nikeSchema);

function validateNike(nike) {
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
  return Joi.validate(nike, schema);
}

exports.nikeSchema = nikeSchema;
exports.Nike = Nike;
exports.validate = validateNike;
