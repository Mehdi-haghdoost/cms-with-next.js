import connectToDB from "@/utils/db"
import coursesModel from "@/models/course"

const handler = async (req, res) => {
    connectToDB();

    if (req.method === 'GET') {
        const { q } = req.query;
        if (req.query.q) {
            const courses = await coursesModel.find({ title: { $regex: q } })
            return res.json(courses)
        } else {
            const courses = await coursesModel.find({}).populate("teacher");
            return res.json(courses);
        }

    } else if (req.method === "POST") {
    try {
      const { title, price, teacher } = req.body;
      if (!title.trim() || title.length < 4) {
        return res.status(422).json({ message: "Title is not valid !!" });
      }
      await coursesModel.create({ title, price, teacher });
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