import connectToDB from "@/utils/db"
import coursesModel from "@/models/course"
import teachersModel from '@/models/teacher'
import courseValidator from "@/validators/course"

const handler = async (req, res) => {
  connectToDB();

  if (req.method === 'GET') {
    const { q } = req.query;
    if (req.query.q) {
      const courses = await coursesModel.find({ title: { $regex: q } })
      return res.json(courses)
    } else {
      const courses = await coursesModel.find({}, "-__v -updatedAt").populate("teacher", "name");
      return res.json(courses);
    }

  } else if (req.method === "POST") {

    const validateResult = courseValidator(req.body)
    if (validateResult !== true) {
      return res.status(422).json(validateResult)
    }

    try {
      const { title, price, teacher } = req.body;

      console.log(req.body);

      if (!title.trim() || title.length < 4) {
        return res.status(422).json({ message: "Title is not valid !!" });
      }

      const mainTeacher = await teachersModel.findOne({ _id: teacher })
      await coursesModel.create({ title, price, teacher: mainTeacher });
      return res
        .status(201)
        .json({ message: "Course created successfully :))" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "UnKnown internal server error !!" });
    }
  }


}

export default handler; 