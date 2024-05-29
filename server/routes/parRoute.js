import express from 'express';
import PAR from '../models/parModel.js';

const router = express.Router();

// Create a new item
router.post('/', async (req, res) => {
  try {
    const newItem = new PAR(req.body);
    const savedItem = await newItem.save();
    res.status(201).json(savedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all items
router.get('/', async (req, res) => {
  try {
    const items = await PAR.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get an item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await PAR.findById(req.params.id);
    if (item == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Update an item by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedItem = await PAR.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (updatedItem == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json(updatedItem);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Delete an item by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedItem = await PAR.findByIdAndDelete(req.params.id);
    if (deletedItem == null) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.status(200).json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
