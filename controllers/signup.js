const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.signup = async (req, res) => {
  try {
    const {email,password } = req.body;
    const existUser = await User.findOne({ email: email });
    if (existUser) res.status(400).json({ message: "User already exists" });
    const bcryptpassword = await bcrypt.hash(password, 12);
    const newuser = new User({  password: bcryptpassword, email });
    const user = await newuser.save();
    const token = jwt.sign({ email, id: user._id }, "jamjem", {
      expiresIn: "2h",
    });
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
