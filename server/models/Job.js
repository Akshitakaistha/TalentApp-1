
const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
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
  stipendOrCertificate: {
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
  },
  industryType: {
    type: String,
    required: true
  },
  package: {
    type: String,
    required: true
  },
  companyWebsite: {
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
