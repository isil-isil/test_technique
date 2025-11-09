import type { RequestHandler } from "express";
import { jobs } from "../../../db/jobs.ts";

export const getJobs: RequestHandler = async (req, res, next) => {
  res.json(jobs);
};
