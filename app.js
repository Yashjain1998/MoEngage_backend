import express from "express";
import mongodb from "./model/mongodb.js";
import cookieParser from "cookie-parser";
import authMiddleware from "./midderware/authMidderware.js";
import getUserDetails from "./controller/getUserDetails.js";
import register from "./controller/register.js";
import login from "./controller/login.js";
import bodyParser from "body-parser";
import cors from "cors";
import getBrewarys from "./controller/getBrewarys.js";

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser()); // Parse cookies
mongodb();

app.post("/api/register", register);
app.post("/api/login", login);
app.get("/api/user", authMiddleware, getUserDetails);
app.get("/api/breweries/:quary", getBrewarys);
app.get("api/brewerie/:By_Id");
app.post("/api/review");
app.listen(4000, () => console.log("Server started on port 4000"));
