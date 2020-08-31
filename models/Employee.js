const { Schema, model, Types } = require('mongoose');

const schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  sex: { type: String, required: true },
  dob: { type: String, required: true },
  location: { type: String },
  phoneNumber: [{ type: String }],
  links: [{ type: String }],
  workExperience: [{ type: Types.ObjectId, ref: 'WorkExperience' }],
  salary: { type: Number, required: true },
  nextSalary: { type: Number },
  isRemote: { type: Boolean, required: true },
  schedule: { type: Object, required: true },
  isWorking: { type: Boolean, required: true }
});

module.exports = model('Employee', schema);
