const joi = require("joi");
import { NextFunction, Request, Response } from "express";
// const { pick } = require("../utils/pick");
import { pick } from "../utils/pick";

const validate =
  (schema: {}) => (req: Request, res: Response, next: NextFunction) => {
    //   console.log({ body: req.body });
    if (
      req.body &&
      Object.keys(req.body).length !== 0 &&
      !req.is("application/json")
    ) {
      res.status(423).json({ error: "Body must be JSON format" });
    } else {
      const validSchema = pick(schema, ["params", "body", "query"]);

      const object = pick(req, Object.keys(validSchema));
      console.log({ validSchema, object });
      const { value, error } = joi
        .compile(validSchema)
        .prefs({ errors: { label: "key" } })
        .validate(object);
      console.log({ value, error });
      if (error) {
        const erorMessage = error.details
          .map((details: { message: string }) => details.message)
          .join(" ,");
        res.status(400).json({ erorMessage });
      }

      Object.assign(req, value);
      return next();
    }
  };

export default validate;
