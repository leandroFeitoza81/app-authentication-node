const Service = require('../services/userService');

const getAllUsers = async (req, res) => {
  try {
    const response = await Service.getAllUsers();
    res.status(200).json(response);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal Error Server' });
  }
};

const createUser = async (req, res) => {
  try {
    const { name, last_name, username, password } = req.body;
    const user = await Service.createUser(name, last_name, username, password);
    if (user.error) {
      return res.status(400).json({ message: user.error });
    }
    return res.status(201).json({ message: 'Usuário cadastrado.' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: 'Erro Interno' });
  }
};

module.exports = {
  getAllUsers,
  createUser,
};
