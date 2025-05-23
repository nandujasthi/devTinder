const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nandujasthi:Z7WwDkgF1kcfSKfC@nodejs.udtgubp.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
