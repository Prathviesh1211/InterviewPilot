import app from "./app.js"
import dotenv from "dotenv"
dotenv.config();

const PORT=process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "InterviewPilot API running 🚀",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});