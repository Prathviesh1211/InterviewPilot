import jwt from "jsonwebtoken";
import User from "../models/User.js";
const authMiddleware = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      messsage: "Authentication required. Please login",
    });
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  const user = await User.findById(decoded.id);

  if (!user) {
    return res.status(401).json({
      success: false,
      messsage: "User not found. Please login again.",
    });
  }

  req.user = user;

  return next();
};

export default authMiddleware;
