import { Router } from "express";
import { addJob } from "../controllers/addJob.ts";
import { getJobs } from "../controllers/getJobs.ts";

const JobsRouter = Router();

JobsRouter.get("/", getJobs);
JobsRouter.post("/", addJob);

export default JobsRouter;
