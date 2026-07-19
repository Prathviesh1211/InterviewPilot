import app from "./app.js"
import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config();

const PORT=process.env.PORT || 5000;

connectDb();

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InterviewPilot API running 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});