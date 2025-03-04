// backend/routes/credentialRoutes.js
const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");
const Credential = require("../models/Credential");
const router = express.Router();

// Fetch credentials by division ID
router.get(
  "/:divisionId",
  protect,
  authorize("normal", "management", "admin"),
  async (req, res) => {
    try {
      const credentials = await Credential.find({
        division: req.params.divisionId,
      });
      if (!credentials || credentials.length === 0) {
        return res
          .status(404)
          .json({ msg: "No credentials found for this division" });
      }
      res.json(credentials);
    } catch (error) {
      console.error("Error fetching credentials:", error.message);
      res.status(500).json({ msg: "Error fetching credentials" });
    }
  }
);

// Add a new credential (normal users and above can add credentials)
router.post(
  "/:divisionId",
  protect,
  authorize("normal", "management", "admin"),
  async (req, res) => {
    const { name, username, password } = req.body;
    try {
      const credential = new Credential({
        name,
        username,
        password,
        division: req.params.divisionId,
      });
      await credential.save();
      res.json({ msg: "Credential added successfully", credential });
    } catch (error) {
      res.status(500).json({ msg: "Error adding credential" });
    }
  }
);

// Update a credential (management users and above can update credentials)
router.put(
  "/:id",
  protect,
  authorize("management", "admin"),
  async (req, res) => {
    const { name, username, password } = req.body;
    try {
      const credential = await Credential.findByIdAndUpdate(
        req.params.id,
        { name, username, password },
        { new: true }
      );
      res.json({ msg: "Credential updated successfully", credential });
    } catch (error) {
      res.status(500).json({ msg: "Error updating credential" });
    }
  }
);

module.exports = router;
