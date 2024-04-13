const validator = require("fastest-validator");

const v = new validator();
const schema = {
    title: { type: "string", min: 8, max: 100 },
    price: { type: "number", min: 0, max: 6_000_000, positive: true }
}

const check = v.compile(schema)

export default check;