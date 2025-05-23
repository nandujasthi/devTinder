const express = require("express");
const app = express();
const connectDB = require("./config/database");
const User = require("./models/user");

const PORT = process.env.PORT || 5555;

app.use(express.json());

app.post("/signup", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    res.status(200).json({
      message: "User Created",
    });
  } catch (err) {
    res.status(400).send("Error in creating user" + err.message);
  }
});

connectDB().then(() => {
  try {
    console.log("DB Connection Successful");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.log("DB connection Failed");
  }
});
