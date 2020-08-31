const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  fromData: { type: String, required: true },
  toDate: { type: String, required: true },
  leavingReason: { type: String }
});

module.exports = model('WorkExperience', schema);
