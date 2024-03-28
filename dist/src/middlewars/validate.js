"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const joi = require("joi");
// const { pick } = require("../utils/pick");
const pick_1 = require("../utils/pick");
const validate = (schema) => (req, res, next) => {
    //   console.log({ body: req.body });
    if (req.body &&
        Object.keys(req.body).length !== 0 &&
        !req.is("application/json")) {
        res.status(423).json({ error: "Body must be JSON format" });
    }
    else {
        const validSchema = (0, pick_1.pick)(schema, ["params", "body", "query"]);
        const object = (0, pick_1.pick)(req, Object.keys(validSchema));
        console.log({ validSchema, object });
        const { value, error } = joi
            .compile(validSchema)
            .prefs({ errors: { label: "key" } })
            .validate(object);
        console.log({ value, error });
        if (error) {
            const erorMessage = error.details
                .map((details) => details.message)
                .join(" ,");
            res.status(400).json({ erorMessage });
        }
        Object.assign(req, value);
        return next();
    }
};
exports.default = validate;
