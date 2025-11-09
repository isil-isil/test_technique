import cors from "cors";
import express, { json } from "express";
import JobsRouter from "./features/jobs/router/index.ts";
import { authorization } from "./middlewares/authorization.ts";

const app = express();

app.use(cors());
app.use(json());

app.use("/jobs", [authorization], JobsRouter);

app.listen(3000, () => {
  console.log("App listening on port 3000 !");
});
