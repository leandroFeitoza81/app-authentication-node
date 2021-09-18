const User = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING(45),
    email: DataTypes.STRING(45),
    password: DataTypes.STRING,
  });
  return users;
};

module.exports = User;
