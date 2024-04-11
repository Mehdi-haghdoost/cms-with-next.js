import connectToDB from "@/utils/db"
import teachersModel from "@/models/teacher"

const handler = async (req, res) => {
    connectToDB();

    if (req.method === 'GET') {
        const { q } = req.query;
      
    
            const teachers = await teachersModel.find({});
            return res.json(teachers);
        

    } else if (req.method === "POST") {
        try {
            const { name } = req.body;
            if (!name.trim() || name.length < 8) {
                return res
                    .status(422)
                    .json({ message: "name is not valid !!" })
            }
            await teachersModel.create({ name});
            return res
                .status(201)
                .json({ message: "Teacher created sucessfully :))" })
        } catch (err) {
            console.log(err);
            return res
                .status(500)
                .json({ message: "Unknow Server Error" })
        }
    }


}

export default handler; 