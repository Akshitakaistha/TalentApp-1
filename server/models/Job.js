
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  jobBanner: {
    type: String,
    required: true
  },
  industryType : {
    type: String,
    required: true
  },
  jobType: {
    type: String,
    required: true
  },
  jobName: {
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
  salaryPackage: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  companyWebsiteUrl: {
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
  },
  experience: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Job', jobSchema);
