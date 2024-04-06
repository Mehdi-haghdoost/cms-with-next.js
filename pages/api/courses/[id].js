import coursesModel from "@/models/course";
const { default: connectToDB } = require("@/utils/db");
const { isValidObjectId } = require("mongoose");

const handler = async (req, res) => {
    
    connectToDB();

    const { id } = req.query;
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
};

export default handler;