const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true },
  company: { type: Types.ObjectId, required: true },
  phoneNumbers: [{ type: String }]
});

module.exports = model('User', schema);
