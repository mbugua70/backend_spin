const mongoose = require("mongoose");

const Schema = mongoose.Schema;

// Defining out Schema structure.

const GeneralreportsSchema = new Schema(
  {
    player_email: {
      type: String,
      required: true,
    },
    player_phone: {
      type: Number,
      required: true,
    },
    player_marchandize: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const GeneralReportsSchemaModel = mongoose.model(
  "player",
  GeneralreportsSchema
);
module.exports = GeneralReportsSchemaModel;
