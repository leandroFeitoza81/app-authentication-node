const bcrypt = require('bcryptjs');

const hashing = (password) => {
  const passwordHash = bcrypt.hashSync(password, 10);
  return passwordHash;
};

module.exports = hashing;
