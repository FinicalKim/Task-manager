const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Get all projects
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({ userId: req.user.userId });
        res.json(projects);
    } catch (err) {
        res.status(500).send('Error fetching projects');
    }
});

// Create a project
router.post('/', async (req, res) => {
    const { name } = req.body;
    try {
        const project = new Project({ name, userId: req.user.userId });
        await project.save();
        res.status(201).send('Project created');
    } catch (err) {
        res.status(400).send('Error creating project');
    }
});

// Update a project
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    try {
        await Project.findByIdAndUpdate(id, { name });
        res.send('Project updated');
    } catch (err) {
        res.status(400).send('Error updating project');
    }
});

// Delete a project
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Project.findByIdAndDelete(id);
        res.send('Project deleted');
    } catch (err) {
        res.status(400).send('Error deleting project');
    }
});

module.exports = router;
