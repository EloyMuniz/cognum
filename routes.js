import express from "express";
import UsersController from "./src/controllers/UserController.js";
const apiVersion = "/v1";
const routes = express.Router();


routes.get(`${apiVersion}/hello`, UsersController.message);
routes.post(`${apiVersion}/register`, UsersController.createEmployee);


export default routes;