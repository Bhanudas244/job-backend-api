const User = require("../model/user");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ message: "User registered" });
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.comparePassword(password))) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
  res.json({ token });
};
