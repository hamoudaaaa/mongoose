const mongoose = require("mongoose");
const schema = mongoose.Schema;
const Contactschema = new schema({
    name: { type: String, required: true },
    food: [String],
    age: Number,
});
module.exports = mongoose.model("User", Contactschema);
