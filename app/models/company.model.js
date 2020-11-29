module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    companyName: {
      type: Sequelize.STRING
    },
    iAddress: {
      type: Sequelize.STRING
    },
  });

  return Company;
};