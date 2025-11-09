import type { RequestHandler } from "express";
import { z } from "zod/v4";
import { jobs } from "../../../db/jobs.ts";

const UpdateJobSchema = z.object({
    title: z.string(),
    category: z.enum(["it", "sales", "managment"]),
    type: z.enum(["cdi", "cdd", "internship"]),
    salary: z.number(),
});

export const updateJob: RequestHandler = async (req, res, next) => {
    try {
        const { uuid } = req.params;
        const input = UpdateJobSchema.parse(req.body);

        const existingJob = jobs.find((job) => job.uuid === uuid);

        if (!existingJob) {
            return res.status(404).json({
                success: false,
                message: "Job not found",
            });
        }

        const jobIndex = jobs.findIndex((job) => job.uuid === uuid);

        jobs[jobIndex] = {
            uuid: existingJob.uuid,
            createdAt: existingJob.createdAt,
            ...input,
        };

        res.status(200).json(jobs[jobIndex]);
    } catch (e) {
        if (e instanceof Error) {
            res.status(500).json({
                success: false,
                message: e.message,
            });
        }

        res.status(500).send();
    }
}
