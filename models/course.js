const mongoose = require("mongoose");
const {schema : teacherSchema} = require("@/models/teacher");

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
        type : teacherSchema,
        required: true,
    },
},
    {
        timestamps: true
    }
)

schema.virtual("comments",{
    ref : "Comment",
    localField : '_id',
    foreignField : 'course'
});

const model = mongoose.models.Course || mongoose.model("Course", schema)
export default model;