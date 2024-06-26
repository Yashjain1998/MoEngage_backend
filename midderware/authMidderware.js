import jwt from "jsonwebtoken"

async function authMidderware(req, res, next) {
  const token = req.headers['authorization'];
  if (!token)
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.user.id;
     
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
  return next();
}

export default authMidderware;
