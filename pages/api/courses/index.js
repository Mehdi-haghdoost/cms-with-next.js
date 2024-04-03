import connectToDB from "@/utils/db"
import coursesModel from "@/models/course"

const handler = async (req, res) => {
    connectToDB();

    if (req.method === "POST") {
        try {
            const { title } = req.body;
            if (!title.trim() || title.length < 8) {
                return res
                    .status(422)
                    .json({ message: "title is not valid !!" })
            }
            await coursesModel.create({ title });
            return res
                .status(201)
                .res({ message: "course created sucessfully :))" })
        } catch (err) {
            return res
                .status(500)
                .json({ message: "Unknow Server Error" })
        }
    }
}

export default handler; 