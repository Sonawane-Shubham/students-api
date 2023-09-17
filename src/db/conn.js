const mongoose = require("mongoose");


mongoose
  .connect(process.env.MONOGDB_URL)
  .then(() => {
    console.log("connection succesful");
  })
  .catch((err) => {
    console.log("failed to connect with mongodb");
  });
