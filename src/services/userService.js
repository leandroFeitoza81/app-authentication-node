const { users } = require('../models');
const hashing = require('../auth/hashingPass');

const getAllUsers = async () => {
  const response = await users.findAll();
  return response;
};

const createUser = async (name, email, password) => {
  if (!email || !password) {
    return { error: 'Dados Inválidos.' };
  }

  const createdUser = await users.create({
    name,
    email,
    password: hashing(password),
  });

  return createdUser;
};

module.exports = {
  getAllUsers,
  createUser,
};
