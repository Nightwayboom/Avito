const router = require("express").Router();

const { where } = require("sequelize");
const { Property } = require("../../db/models");

router.get("/", async (req, res) => {
  try {
    const allProperties = await Property.findAll({ where: req.query });
    res.status(200).json({ message: "success", allProperties });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    const property = await Property.findOne({ where: { id: propertyId } });
    res.status(200).json({ message: "success", property });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.post("/", async (req, res) => {
  try {
    const { propertyCategoryId, title, price, description, photo } = req.body;
    const newProperties = await Property.create({
      propertyCategoryId,
      title,
      price,
      description,
      photo,
    });
    if (newProperties) {
      res.status(201).json({ message: "success", newProperties });
      return;
    }
    res.status(400).json({ message: "НЕА" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.put("/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    const { propertyCategoryId, title, price, description, photo } = req.body;
    const updateProperty = await Property.create(
      {
        propertyCategoryId,
        title,
        price,
        description,
        photo,
      },
      { where: { id: propertyId } }
    );
    if (updateProperty[0] > 0) {
      res.status(200).json({ message: "success", updateProperty });
      return;
    }
    res.status(400).json({ message: "НЕА" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.delete("/:propertyId", async (req, res) => {
  try {
    const { propertyId } = req.params;
    const deleteProperty = await Property.destroy({
      where: { id: propertyId },
    });
    if (deleteProperty > 0) {
      res.status(200).json({ message: "success", deleteProperty });
      return;
    }
    res.status(400).json({ message: "НЕА" });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
