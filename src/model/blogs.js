const mongoose = require("mongoose");

const newBlog = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},{ timestamps: true });

module.exports = mongoose.model("blogs", newBlog);
