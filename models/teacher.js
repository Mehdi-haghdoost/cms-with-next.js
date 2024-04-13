const mongoose = require("mongoose");

export const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const model = mongoose.models.Teacher || mongoose.model("Teacher", schema)
export default model;