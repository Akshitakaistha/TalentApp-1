
const mongoose = require('mongoose');

const postgradSchema = new mongoose.Schema({
  banner: {
    type: String,
    required: true
  },
  specialization: {
    type: String,
    required: true
  },
  courseName: {
    type: String,
    required: true
  },
  skills: [{
    type: String,
    required: true
  }],
  organizationName: {
    type: String,
    required: true
  },
  courseFee: {
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
  organizationWebsite: {
    type: String,
    required: true
  },
  emi: {
    type: String,
    required: true
  },
  courseType: {
    type: String,
    required: true
  },
  courseDetails: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('PostGrad', postgradSchema);
