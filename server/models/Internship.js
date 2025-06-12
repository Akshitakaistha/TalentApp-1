
const mongoose = require('mongoose');

const internshipSchema = new mongoose.Schema({
  internshipBanner: {
    type: String,
    required: true
  },
  domain: {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  internshipName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  skills: [{
    type: String,
    required: true
  }],
  companyName: {
    type: String,
    required: true
  },
  stipend: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  workingHours: {
    type: String,
    required: true
  },
  jobProfile: {
    type: String,
    required: true
  },
  shiftType: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Internship', internshipSchema);
