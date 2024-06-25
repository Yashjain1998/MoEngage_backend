import User from "../model/user.js";

async function getUser(req, res) {
  const id = req.userId;
  try {
    const user = await User.findById(id);
    res.status(200).json({ user: user });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export default getUser;
