import { Schema } from "mongoose";
import adminDefinition from "../../schemaDefinitions/users/adminDefinition";

export default new Schema(adminDefinition, {
    timestamps: true
})
