import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import routes from "./routes.js";

const PORT = 3000;
const HOST = "0.0.0.0";
//Criação da inicialização do servidor
const app = express();
app.use((req, res, next) => {
    if (req.path === "/v1/apiespecifica") {
      express.raw({ type: "application/json" })(req, res, next);
    } else {
      express.json()(req, res, next);
    }
  });
app.use(cors());
app.use(routes);

app.listen(PORT, HOST);
