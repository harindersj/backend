import express from "express";
import { addUser, viewUser } from "../controller/UserAccount";

export const api = express.Router();

api.route("/user").post(addUser).get(viewUser);
