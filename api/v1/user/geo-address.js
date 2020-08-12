/*
 * @file: geo-address.js
 * @description: It Contain geo-address router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { getGeoLocation } from '../../../controllers/user';
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/user/geo-address:
 *  get:
 *   tags: ["user"]
 *   summary: Get user geo address
 *   description: api used to get user geo address.
 *   parameters:
 *      - in: query
 *        name: ip
 *        type: string
 *        required: true
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const userSchema = Joi.object({
  ip: Joi.string().trim().required().label('IP'),
});

app.get(
  '/user/geo-address',
  validator.query(userSchema, {
    joi: { convert: true, allowUnknown: false },
  }),
  getGeoLocation,
);

export default app;
