const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const authenticateSchema = new Schema({
  title: { type: String, required: true },
  body: { type: String }
});


module.exports =  authenticateSchema;
