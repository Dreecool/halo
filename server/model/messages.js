const mongoose = require("mongoose");


const MessageSchema = new mongoose.Schema({

  yourName_ID: {
    type: String,
    required: true
  }, 

  otherName_ID: {
    type: String,
    required: true
  }, 


  message: {
    type: String,
    required: true
  }, 


})


const Message = mongoose.model("message_table", MessageSchema);

module.exports = Message