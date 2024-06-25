

async function authMidderware(req, res, next) {
  const token = req.cookie.jwt;
  if (!token)
    return res.status(401).json({ error: "Unauthorized: No token provided" });
  try {
    // Verify token
    const decoded = jwt.verify(token, "jwtSecret");
    req.userId = decoded.user.id;
    next(); // Move to the next middleware or route handler
  } catch (error) {
    console.error("Error verifying token:", error);
    res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
}

export default authMidderware;
