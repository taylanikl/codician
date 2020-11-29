module.exports = app => {
  const person = require("../controllers/person.controller.js");

  var router = require("express").Router();

  // Create a new person
  router.post("/", person.create);

  // Retrieve all person
  router.get("/", person.findAll);

  // Retrieve all person with an 
  router.get("/getPeople/:id", person.getPeople);

  // Retrieve all published persons
  router.get("/published", person.findAllPublished);

  // Retrieve a single person with id
  router.get("/:id", person.findOne);

  // Update a person with id
  router.put("/:id", person.update);

  // Delete a person with id
  router.delete("/:id", person.delete);

  // Delete all person
  router.delete("/", person.deleteAll);

  app.use('/api/person', router);
};