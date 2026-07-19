import {
  loginUserService,
  registerUserService,
} from "../services/auth.service.js";

export const registerUser = async (req, res) => {
  try {
    const user = await registerUserService(req.validatedData);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const loginUser = async (req, res) => {
  try {
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
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
