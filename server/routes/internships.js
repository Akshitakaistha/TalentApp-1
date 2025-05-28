
const express = require('express');
const router = express.Router();
const Internship = require('../models/Internship');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET all internships
router.get('/', auth, async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.json(internships);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create internship
router.post('/', auth, upload.single('internshipBanner'), async (req, res) => {
  try {
    const internshipData = {
      ...req.body,
      internshipBanner: req.file ? `/uploads/${req.file.filename}` : '',
      skills: Array.isArray(req.body.skills) ? req.body.skills : req.body.skills.split(',').map(s => s.trim())
    };

    const internship = new Internship(internshipData);
    await internship.save();
    res.status(201).json(internship);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE internship
router.delete('/:id', auth, async (req, res) => {
  try {
    await Internship.findByIdAndDelete(req.params.id);
    res.json({ message: 'Internship deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
