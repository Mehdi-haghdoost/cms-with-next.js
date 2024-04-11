const mongoose = require("mongoose");

const schema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    }
})

const model = mongoose.models.Teacher || mongoose.model("Teacher", schema)
export default model;