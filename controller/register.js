import bcrypt from "bcryptjs";
import User from "../model/user.js";

async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ error: "user already exists" });
    user = new User({
      name,
      email,
      password,
    });
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();
    return res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error register user: ", error);
    res.status(500).json({ error: "server error" });
  }
}
export default register;
