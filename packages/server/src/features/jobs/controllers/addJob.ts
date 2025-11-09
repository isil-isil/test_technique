import type { RequestHandler } from "express";
import { v4 } from "uuid";
import { z } from "zod/v4";
import { jobs } from "../../../db/jobs.ts";

const AddJobSchema = z.object({
  title: z.string(),
  category: z.literal(["it", "sales", "managment"]),
  type: z.literal(["cdi", "cdd", "internship"]),
  salary: z.number(),
});

export const addJob: RequestHandler = async (req, res, next) => {
  try {
    const input = AddJobSchema.parse(req.body);

    const newJob = { ...input, uuid: v4(), createdAt: new Date() };

    jobs.push(newJob);

    res.status(200).json(newJob);
  } catch (e) {
    if (e instanceof Error) {
      res.status(500).json({
        success: false,
        message: e.message,
      });
    }

    res.status(500).send();
  }
};
