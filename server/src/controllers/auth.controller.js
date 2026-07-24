import {
  loginUserService,
  registerUserService,
} from "../services/auth.service.js";
import asyncHandler from "express-async-handler";

export const registerUser = asyncHandler(async (req, res) => {
    const user = await registerUserService(req.validatedData);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
 
});

export const loginUser = asyncHandler(async (req, res) => {
  const { user, token } = await loginUserService(req.validatedData);

  res.cookie("token", token, {
    httpOnly: true, //=>JavaScript can't read the cookie
    secure: process.env.NODE_ENV === "production", //=>Only send over HTTPS in production.
    sameSite: "strict", //=>Helps protect against CSRF attacks.
    maxAge: 7 * 24 * 60 * 60 * 1000, //=>Browser removes the cookie after 7 days.
  });

  return res.status(200).json({
    success: true,
    message: "Log in successful",
    data: user,
  });
});

export const getCurrentUser = asyncHandler(async (req, res) => {
  return res.status(200).json({
    success: true,
    data: req.user,
  });
});

export const logoutUser = asyncHandler(async (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
  });
  return res.status(200).json({
    success: true,
    message: "Logged out successfully.",
  });
});
