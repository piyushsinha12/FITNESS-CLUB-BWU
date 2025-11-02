import Membership from "../models/Membership.js";

// Create new membership plan
export const createMembership = async (req, res) => {
  try {
    const membership = new Membership(req.body);
    await membership.save();
    res.status(201).json({ message: "Membership created", membership });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all memberships
export const getAllMemberships = async (req, res) => {
  try {
    const memberships = await Membership.find();
    res.json(memberships);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single membership by ID
export const getMembershipById = async (req, res) => {
  try {
    const membership = await Membership.findById(req.params.id);
    if (!membership) return res.status(404).json({ message: "Not found" });
    res.json(membership);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update membership
export const updateMembership = async (req, res) => {
  try {
    const updated = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: "Membership updated", updated });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete (Deactivate) a plan
export const deleteMembership = async (req, res) => {
  try {
    await Membership.findByIdAndUpdate(req.params.id, { status: "inactive" });
    res.json({ message: "Membership deactivated" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
