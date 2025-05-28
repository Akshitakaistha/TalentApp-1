
const express = require('express');
const router = express.Router();
const Global = require('../models/Global');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET all global programs
router.get('/', auth, async (req, res) => {
  try {
    const programs = await Global.find().sort({ createdAt: -1 });
    res.json(programs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create global program
router.post('/', auth, upload.single('banner'), async (req, res) => {
  try {
    const programData = {
      ...req.body,
      banner: req.file ? `/uploads/${req.file.filename}` : '',
      skills: Array.isArray(req.body.skills) ? req.body.skills : req.body.skills.split(',').map(s => s.trim())
    };

    const program = new Global(programData);
    await program.save();
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE global program
router.delete('/:id', auth, async (req, res) => {
  try {
    await Global.findByIdAndDelete(req.params.id);
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
