import express from "express";
import mongodb from "./model/mongodb.js";
import cookieParser from "cookie-parser";
import authMiddleware from "./midderware/authMidderware.js";
import getUserDetails from "./controller/getUserDetails.js";
import register from "./controller/register.js";
import login from "./controller/login.js";
import bodyParser from "body-parser"

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser()); // Parse cookies
mongodb();

app.post("/api/register", register);
app.post("/api/login", login);
app.get("/api/user", authMiddleware, getUserDetails);
app.get("/api/brewerys/:quary", () => {});
app.get("api/brewery/:By_Id");
app.post("/api/review");
app.listen(4000, () => console.log("Server started on port 4000"));
