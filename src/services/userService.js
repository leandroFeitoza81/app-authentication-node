const { users } = require('../models');
const hashing = require('../auth/hashingPass');

const getAllUsers = async () => {
  const response = await users.findAll();
  return response;
};

const createUser = async (name, last_name, username, password) => {
  if (!name || !last_name || !username || !password) {
    return { error: 'Dados Inválidos.' };
  }

  const createdUser = await users.create({
    name,
    last_name,
    username,
    password: hashing(password),
  });

  return createdUser;
};

module.exports = {
  getAllUsers,
  createUser,
};
