const mongoose = require("mongoose");
const express = require("express");
const db = require("./config/connection");
const PORT = 3001
const app = express();
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);


db.once('open', () => {

    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
    });
  });