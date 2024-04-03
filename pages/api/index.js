const { default: connectToDB } = require("@/utils/db")

const handler = async (req, res) => {
    connectToDB();

    res.json({ message: "wellcome to cms apis home page !" })
}
export default handler;