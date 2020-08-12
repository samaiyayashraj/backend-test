/*
 * @file: pay-charge.js
 * @description: It Contain payment router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { paymentCharge } from '../../../controllers/payment';
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/payment:
 *  post:
 *   tags: ["payment"]
 *   summary: Payment charge api
 *   description: api used to charge payment.
 *   responses:
 *    '200':
 *     description: success
 *    '400':
 *     description: fail
 */

// const paymentSchema = Joi.object({
//   firstName: Joi.string().trim().required().label('First Name'),
//   lastName: Joi.string().trim().optional().allow('').label('Last Name'),
//   email: Joi.string().trim().email().lowercase().required().label('Email'),
//   password: Joi.string().trim().required().label('Password'),
//   country: Joi.string().trim().optional().allow('').label('Country'),
//   address: Joi.string().trim().required().label('Address'),
//   location: Joi.object({
//     coordinates: Joi.array().required().label('coordinates'),
//   })
//     .optional()
//     .label('location')
// });

app.post(
  '/payment',
//   validator.body(regiterSchema, {
//     joi: { convert: true, allowUnknown: false },
//   }),
  paymentCharge,
);

export default app;
