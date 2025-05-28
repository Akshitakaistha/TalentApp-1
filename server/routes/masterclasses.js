
const express = require('express');
const router = express.Router();
const Masterclass = require('../models/Masterclass');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET all masterclasses
router.get('/', auth, async (req, res) => {
  try {
    const masterclasses = await Masterclass.find().sort({ createdAt: -1 });
    res.json(masterclasses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create masterclass
router.post('/', auth, upload.single('bootcampBanner'), async (req, res) => {
  try {
    const masterclassData = {
      ...req.body,
      bootcampBanner: req.file ? `/uploads/${req.file.filename}` : '',
      skills: Array.isArray(req.body.skills) ? req.body.skills : req.body.skills.split(',').map(s => s.trim())
    };

    const masterclass = new Masterclass(masterclassData);
    await masterclass.save();
    res.status(201).json(masterclass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE masterclass
router.delete('/:id', auth, async (req, res) => {
  try {
    await Masterclass.findByIdAndDelete(req.params.id);
    res.json({ message: 'Masterclass deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
