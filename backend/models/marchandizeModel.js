const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining out Schema structure.

const GiftreportsSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    gift_number: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const GiftReportsSchemaModel = mongoose.model(
  "segment_wheel",
  GiftreportsSchema
);
module.exports = GiftReportsSchemaModel;
