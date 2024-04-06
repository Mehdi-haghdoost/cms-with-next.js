import coursesModel from "@/models/course";
const { default: connectToDB } = require("@/utils/db");
const { isValidObjectId } = require("mongoose");

const handler = async (req, res) => {

    connectToDB();

    const { id } = req.query;

    if (req.method === 'DELETE') {
        if (isValidObjectId(id)) {
            try {
                await coursesModel.findOneAndDelete({ _id: id });
                return res.json({ message: "course removed successfully :))" })
            } catch (err) {
                return res
                    .status(500)
                    .json({ message: "Internal server error !!" })
            }
        } else {
            return res
                .status(422)
                .json({ message: "course ID is not valid !! " })
        }

    } else if (req.method === 'PUT') {

        const { title } = req.body;

        try {
            if (isValidObjectId(id)) {

                await coursesModel.findOneAndUpdate({ _id: id }, { title })
                return res.json({ message: "course Updated sucessfully :))" })

            } else {
                return res
                    .status(500)
                    .json({ message: "Internal server Error !!" })
            }
        } catch (err) {
            return res
                .status(422)
                .json({ message: "course Id is not valid :))" })
        }
    }



};

export default handler;