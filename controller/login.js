import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../model/user.js";

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });
    const token = jwt.sign({ user: { id: user.id } }, process.env.SECRET, {
      
    });
    return res.status(201).json({token})
  } catch (error) {navigator
    console.error("Error logging in user:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export default login;
