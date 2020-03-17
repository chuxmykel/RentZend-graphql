const agent = (sequelize, DataTypes) => {
  const Agent = sequelize.define('Agent', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
      unique: true,
    },
    phoneNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
      unique: true,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    zipCode: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true },
    },
    passport: {
      type: DataTypes.STRING,
    },
  });

  return Agent;
};

export default agent;
