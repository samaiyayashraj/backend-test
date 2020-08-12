/*
 * @file: validate-email.js
 * @description: It Contain validate-email router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { validateEmail } from '../../../controllers/user';
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/user/validate-email:
 *  get:
 *   tags: ["user"]
 *   summary: validate email api for all Users
 *   description: api used to validate email.
 *   parameters:
 *      - in: query
 *        name: email
 *        type: string
 *        required: true
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const userSchema = Joi.object({
  email: Joi.string().email().trim().required().label('Email'),
});

app.get(
  '/user/validate-email',
  validator.query(userSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  validateEmail,
);

export default app;
