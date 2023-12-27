import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  _id: String,
  creationTime: {
    type: Date,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: [3, "Name must be at least 3 characters"],
    maxLength: [40, "Name is too large"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  DateOfBirth: {
    type: Date,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  userImage: {
    type: Array,
    default: [],
  },
  locationData: {
    type: Array,
    default: [],
  },
  currentLocation: {
    type: String,
  },
  activeStatus: {
    type: Boolean,
  },
});
export const User = mongoose.model("User", userSchema);
