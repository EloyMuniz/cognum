import express from "express";
import UsersController from "./src/controllers/UserController.js";
const apiVersion = "/v1";
const routes = express.Router();


routes.get(`${apiVersion}/hello`, UsersController.message);
routes.post(`${apiVersion}/register`, UsersController.createEmployee);
routes.post(`${apiVersion}/login`, UsersController.Login);
routes.post(`${apiVersion}/remove`, UsersController.removeUser);
routes.post(`${apiVersion}/updatename`, UsersController.changeuserName);
export default routes;