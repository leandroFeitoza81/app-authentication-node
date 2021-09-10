const wellcome = (req, res) => {
  res.status(200).json({ message: 'Bem vindo!' });
};

module.exports = wellcome;
