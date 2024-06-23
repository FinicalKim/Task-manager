const express = require('express');
const router = express.Router();
const Task = require('../models/task');

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find({ userId: req.user.userId });
        res.json(tasks);
    } catch (err) {
        res.status(500).send('Error fetching tasks');
    }
});

// Create a task
router.post('/', async (req, res) => {
    const { title, description, deadline, priority, projectId } = req.body;
    try {
        const task = new Task({ title, description, deadline, priority, projectId, userId: req.user.userId });
        await task.save();
        res.status(201).send('Task created');
    } catch (err) {
        res.status(400).send('Error creating task');
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, deadline, priority, status } = req.body;
    try {
        await Task.findByIdAndUpdate(id, { title, description, deadline, priority, status });
        res.send('Task updated');
    } catch (err) {
        res.status(400).send('Error updating task');
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        await Task.findByIdAndDelete(id);
        res.send('Task deleted');
    } catch (err) {
        res.status(400).send('Error deleting task');
    }
});

module.exports = router;
