module.exports = app => {
  const company = require("../controllers/company.controller.js");

  var router = require("express").Router();

  // Create a new company
  router.post("/", company.create);

  // Retrieve all company
  router.get("/", company.findAll);

  // Retrieve all published companys
  router.get("/published", company.findAllPublished);

  // Retrieve a single company with id
  router.get("/:id", company.findOne);

  // Update a company with id
  router.put("/:id", company.update);

  // Delete a company with id
  router.delete("/:id", company.delete);

  // Delete all company
  router.delete("/", company.deleteAll);

  app.use('/api/company', router);
};