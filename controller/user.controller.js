import { User } from "../model/user.model.js";

export const createUser = async (req, res) => {
  const user = new User(req.body);
  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const dropData = async (req, res) => {
  try {
    const users = await User.deleteMany();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}