import express from "express";
import connectDb from "./utils/db.js";
import registerRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());
app.use("/api/auth",registerRouter)

app.listen(3000, async() => {
    await connectDb();
    console.log("Database connected");
    console.log("Server running on port 3000");
});