const { users } = require('../models');

const getAllUsers = async (req, res) => {
  const doBanco = await users.findAll();
  return res.status(200).json(doBanco);
};

module.exports = {
  getAllUsers,
};
