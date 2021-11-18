const User = require("../models/userSchema");

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
exports.login = async (req, res) => {
  try {
    const {email, password } = req.body;
    console.log(password);
    const existUser = await User.findOne({ email: email });
    console.log(existUser);
    if (!existUser) {
      res.status(400).json({ message: "wrong email" });
    }
    const validatepassword = bcrypt.compare(password, existUser.password);
    console.log(validatepassword);
    if (!validatepassword) res.status(400).json({ message: "wrong password" });

    const token = jwt.sign({ email, id: existUser._id }, "jamjem", { expiresIn: "2h" });
    res.status(200).json({ existUser, token });
  } catch (error) {
    res.status(500).json({ message: `something went wrong ${error}` });
  }
};
