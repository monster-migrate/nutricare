import mongoose, { model } from "mongoose";
import { UsersInterface } from "./interface";
import { UserSchema } from "./schema";
export default mongoose.models.NutriCare ||
  model<UsersInterface>("NutriCare", UserSchema, "users");
