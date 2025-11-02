import Class from "../models/Class.js";

// Create class
export const createClass = async (req, res) => {
  try {
    const fitnessClass = new Class(req.body);
    await fitnessClass.save();
    res.status(201).json({ message: "Class created", fitnessClass });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all classes
export const getAllClasses = async (req, res) => {
  try {
    const classes = await Class.find().populate("trainer_id", "name");
    res.json(classes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get single class by ID
export const getClassById = async (req, res) => {
  try {
    const fitnessClass = await Class.findById(req.params.id).populate("trainer_id", "name");
    if (!fitnessClass) return res.status(404).json({ message: "Class not found" });
    res.json(fitnessClass);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update class
export const updateClass = async (req, res) => {
  try {
    const updated = await Class.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Class updated", updated });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete (soft) class
export const deleteClass = async (req, res) => {
  try {
    await Class.findByIdAndUpdate(req.params.id, { status: "inactive" });
    res.json({ message: "Class deactivated" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
