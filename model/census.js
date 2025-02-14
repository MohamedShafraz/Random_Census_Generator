const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CSchema = new Schema({
  city: {
    type: String,
    required: [true, "city-state field required"],
  },
  census: {
    type: Number,
    required: [true, "cesus required"],
  },
});

const Census = mongoose.model("census", CSchema, "census");

module.exports = Census;
