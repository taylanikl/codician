module.exports = (app) => {
  const address = require("../controllers/address.controller.js");

  var router = require("express").Router();

  // Create a new address
  router.post("/", address.create);

  // Retrieve all address
  router.get("/", address.findAll);

  // Retrieve all address with an
  router.get("/getAddress/:id", address.getAddress);

  // Retrieve all published addresses
  router.get("/all", address.findAll);

  // Retrieve a single address with id
  router.get("/:id", address.findOne);

  // Update a address with id
  router.put("/:id", address.update);

  // Delete a address with id
  router.delete("/:id", address.delete);

  // Delete all address
  router.delete("/", address.deleteAll);

  app.use("/api/address", router);
};
