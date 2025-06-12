
const express = require('express');
const router = express.Router();
const Bootcamp = require('../models/Bootcamp');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET all bootcamps
router.get('/', auth, async (req, res) => {
  try {
    const bootcamps = await Bootcamp.find().sort({ createdAt: -1 });
    res.json(bootcamps);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create bootcamp
router.post('/', auth, upload.single('bootcampBanner'), async (req, res) => {
  try {
    const bootcampData = {
      ...req.body,
      bootcampBanner: req.file ? `/uploads/${req.file.filename}` : '',
      skills: Array.isArray(req.body.skills) ? req.body.skills : req.body.skills.split(',').map(s => s.trim())
    };

    const bootcamp = new Bootcamp(bootcampData);
    await bootcamp.save();
    res.status(201).json(bootcamp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE bootcamp
router.delete('/:id', auth, async (req, res) => {
  try {
    await Bootcamp.findByIdAndDelete(req.params.id);
    res.json({ message: 'Bootcamp deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update
router.put('/:id', auth, upload.single('bootcampBanner'), async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      skills: Array.isArray(req.body.skills)
        ? req.body.skills
        : req.body.skills.split(',').map((s) => s.trim())
    };

    if (req.file) {
      updateData.BootcampBanner = `/uploads/${req.file.filename}`;
    }

    const updatedBootcamp = await Bootcamp.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedBootcamp) {
      return res.status(404).json({ message: 'Bootcamp not found' });
    }

    res.json(updatedBootcamp);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
