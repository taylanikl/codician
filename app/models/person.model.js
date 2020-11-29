module.exports = (sequelize, Sequelize) => {
  const Person = sequelize.define("person", {
    name: {
      type: Sequelize.STRING,
    },
    title: {
      type: Sequelize.STRING,
    },
    lastName: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    tel: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.INTEGER,
    },
  });

  return Person;
};
