const User = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING(45),
    last_name: DataTypes.STRING(45),
    username: DataTypes.STRING(45),
    password: DataTypes.STRING,
  });
  return users;
};

module.exports = User;
