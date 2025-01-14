import { Schema } from "mongoose";
import { UsersInterface, UserRole } from "./interface";

export const UserSchema = new Schema<UsersInterface>({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["Admin", "Pantry", "Delivery"],
    required: true,
  },
  address: {
    type: String,
    required: false,
  },
  resume: { type: String, required: false },
  notes: { type: String, required: false },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
