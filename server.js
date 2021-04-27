const express = require("express");
const app = express();
const connectDB = require("./config/ConnectDB");
const contactrouter = require("./route/user");
app.use(express.json());
connectDB();

app.use("/ahmed/style", contactrouter);

const port = 5000;
app.listen(port, () => {
    console.log(`le serveur is running ${port}`);
});
