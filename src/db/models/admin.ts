import { model } from "mongoose";
import adminsSchema from "../schemas/users/adminsSchema";

export default model('admin', adminsSchema)
