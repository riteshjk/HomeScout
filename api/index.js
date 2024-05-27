import express from "express";
import connectDb from "./utils/db.js";

const app = express();

app.listen(3000, async() => {
    // await connectDb();
    console.log("Database connected");
    console.log("Server running on port 3000");
});