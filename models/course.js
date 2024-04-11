const mongoose = require("mongoose");

const schema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLenght: 4,
        maxLenght: 20,
        index: true,
        unique: true,
    },
    price: {
        type: Number,
        required: true,
        default: 0,
        min: 0,
        max: 50000,
    },
    teacher: {
        type: mongoose.Types.ObjectId,
        ref: "Teacher",
        required: true,
    },
},
    {
        timestamps: true
    }
)

const model = mongoose.models.Course || mongoose.model("Course", schema)
export default model;