module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    title: {
      type: Sequelize.STRING,
    },
    latitude: {
      type: Sequelize.DOUBLE,
    },
    longitude: {
      type: Sequelize.DOUBLE,
    },
    company: {
      type: Sequelize.INTEGER,
    },
  });

  return Address;
};
