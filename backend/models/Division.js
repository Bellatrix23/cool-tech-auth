const mongoose = require("mongoose");

const DivisionSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ou: { type: mongoose.Schema.Types.ObjectId, ref: "OU" },
  credentials: [{ type: mongoose.Schema.Types.ObjectId, ref: "Credential" }],
});

module.exports = mongoose.model("Division", DivisionSchema);
