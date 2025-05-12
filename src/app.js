const express = require("express");
const app = express();

const PORT = process.env.PORT || 5555;

app.use("/", (req, res) => {
  res.send("This the response from Homepage");
});

app.use("/login", (req, res) => {
  res.send("This is the response from login");
});

app.use("/test", (req, res) => {
  res.send("Hello, World! My first server is responding!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
