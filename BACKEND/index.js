import express from "express";
import cors from "cors";
import morgan from "morgan";
import v1clientRoute from "./src/v1/routes/users/users.routes..js";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

//config midelwares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/v1", v1clientRoute);

app.listen(PORT, () =>
  console.log(`server on listen in http://localhost:${PORT}`)
);
