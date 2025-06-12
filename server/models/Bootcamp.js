
const mongoose = require('mongoose');

const bootcampSchema = new mongoose.Schema({
  bootcampBanner: {
    type: String,
    required: true
  },
  viewers: {
    type: Number,
    default: 0
  },
  bootcampName: {
    type: String,
    required: true
  },
  skills: [{
    type: String,
    required: true
  }],
  keynoteSpeaker: {
    type: String,
    required: true
  },
  goal: {
    type: String,
    required: true
  },
  location: {
    type: String,
    // enum: ['In Class', 'Online', 'Hybrid', 'Distance'],
    required: true
  },
  bootCampDesc: {
    type: String,
    required: true
  },
  industryType: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Bootcamp', bootcampSchema);
