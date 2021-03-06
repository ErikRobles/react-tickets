// @desc Register a new user
// @route /api/users
// @access Public
const registerUser = (req, res) => {
  const { name, email, password } = req.body;
  // Validation
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please Include All Fields');
  }
  res.send('register Route');
};

// @desc Login user
// @route /api/users/login
// @access Public
const loginUser = (req, res) => {
  res.send('Login Route');
};

module.exports = {
  registerUser,
  loginUser,
};
