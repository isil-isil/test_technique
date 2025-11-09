import type { RequestHandler } from "express";

export const authorization: RequestHandler = async (req, res, next) => {
  const headers = req.headers;

  if (!headers.authorization) {
    return res.status(400).send();
  }

  if (headers.authorization !== "ubiquid") {
    return res.status(401).send();
  }

  next();
};
