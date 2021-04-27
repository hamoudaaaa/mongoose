const express = require("express");
const User = require("../model/User");

const router = express.Router();

//@ desc add new contact
//@method post
//@req.body

router.post("/add", async (req, res) => {
    try {
        const { name, food, age } = req.body;
        const user = new User({ name, age, food });

        await user.save();
        return res.status(200).send("user added");
    } catch (error) {
        return res.status(400).send("impossible to added", error);
    }
});
// Create Many Records with model.create()

router.post("/added", async (req, res) => {
    try {
        const userr = await User.insertMany([
            { name: "Ahmed", age: 25, food: ["egg", "fruits"] },
            { name: "Asma", age: 23, food: ["egg", "fruits"] },
        ]);
        res.status(200).send({ msg: "user is addedddddd", userr });
    } catch (error) {
        res.status(500).send("fail to add user");
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send("impossible to get contacts");
    }
});
// router.put("/:UserId", async (req, res) => {
//     try {
//         const id = req.params.UserId;
//         const user = await User.findOnedAndUpdate(
//             { _id: id },
//             { $set: { food: food.push("hamburger") } }
//         );

//         res.status(200).send({ msg: "user updated", user });
//     } catch (error) {
//         res.status(500).send("fail to update user");
//     }
// });
router.put("/:Id", async (req, res) => {
    try {
        const id = req.params.Id;

        const userr = await User.findOneAndUpdate(
            { _id: id },
            { $set: { ...req.body } }
        );

        Userr.save();
        res.status(200).send({ msg: "person updated", userr });
    } catch (error) {
        res.status(500).send("impossible to update person");
    }
});

// router.put("/:Id", async (req, res) => {
//     try {
//         const id = req.params.Id;

//         const contact = await User.find({ _id: id }, (result, err) => {
//             if (err) return "error to eddit";
//             else return result.contact.push("hamburger");
//         }).save();

//         res.status(200).send({ msg: "zebneh hamburger", contact });
//     } catch (error) {
//         res.status(500).send("impossible to edited contacts");
//     }
// });
router.delete("/delete/:Id", async (req, res) => {
    try {
        const { Id } = req.params;
        const contact = await User.findByIdAndDelete(Id);
        res.status(200).send({ msg: "contact deleted", contact });
    } catch (error) {
        res.status(500).send("impossible to deleted contacts");
    }
});

module.exports = router;
