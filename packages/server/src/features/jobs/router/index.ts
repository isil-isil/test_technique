import { Router } from "express";
import { addJob } from "../controllers/addJob.ts";
import { getJobs } from "../controllers/getJobs.ts";
import { updateJob } from "../controllers/updateJob.ts";

const JobsRouter = Router();

JobsRouter.get("/", getJobs);
JobsRouter.post("/", addJob);
JobsRouter.put("/:uuid", updateJob);

export default JobsRouter;
