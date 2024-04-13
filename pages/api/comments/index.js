import connectToDB from "@/utils/db"
import commentsModel from '@/models/comment'

const handler = async (req, res) => {
    connectToDB();

    if (req.method === 'GET') {

        const comments = await commentsModel.find({}).populate("course");
        return res.json(comments);

    } else if (req.method === "POST") {

        try {
            const { body, course } = req.body;

            console.log(req.body);

            if (!body.trim()) {
                return res.status(422).json({ message: "body is not valid !!" });
            }

            await commentsModel.create({ body, course });
            return res
                .status(201)
                .json({ message: "body created successfully :))" });
        } catch (err) {
            return res
                .status(500)
                .json({ message: "UnKnown internal server error !!", error: err });
        }
    }


}

export default handler; 