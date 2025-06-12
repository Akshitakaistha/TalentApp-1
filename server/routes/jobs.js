
const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// GET all jobs
router.get('/', auth, async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create job
router.post('/', auth, upload.single('jobBanner'), async (req, res) => {
  try {
    const jobData = {
      ...req.body,
      jobBanner: req.file ? `/uploads/${req.file.filename}` : '',
      skills: Array.isArray(req.body.skills) ? req.body.skills : req.body.skills.split(',').map(s => s.trim())
    };

    const job = new Job(jobData);
    await job.save();
    res.status(201).json(job);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// DELETE job
router.delete('/:id', auth, async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put('/:id', auth, upload.single('jobBanner'), async (req, res) => {
  try {
    const updateData = {
      ...req.body,
      skills: Array.isArray(req.body.skills)
        ? req.body.skills
        : req.body.skills.split(',').map((s) => s.trim())
    };

    if (req.file) {
      updateData.jobBanner = `/uploads/${req.file.filename}`;
    }

    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    if (!updatedJob) {
      return res.status(404).json({ message: 'Job not found' });
    }

    res.json(updatedJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
