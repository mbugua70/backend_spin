const mongoose = require("mongoose");
const GiftReportsSchemaModel = require("../models/marchandizeModel");

// get all gift

module.exports.gifts_report_get_all = async (req, res) => {
  //   res.json({ msg: "Get all the workouts" });
  try {
    const giftReport = await GiftReportsSchemaModel.find(
      {},
      {
        text: 1,
        gift_number: 1,
      }
    );
    console.log(giftReport);
    if (giftReport.length === 0) {
      return res
        .status(200)
        .json({ success: true, msg: "You have no workout record available" });
    }
    return res.status(200).json({ success: true, giftReport });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};
