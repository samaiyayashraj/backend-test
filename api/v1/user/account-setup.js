/*
 * @file: update.js
 * @description: It Contain update user router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { accountSetup } from '../../../controllers/user';
import { checkToken } from '../../../utilities/universal';
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/user/user/account-setup:
 *  put:
 *   tags: ["user"]
 *   summary: user account setup api
 *   description: api used to account setup.<br/><b>location</b> coordinates should be array like <b>[long, lat]</b>.
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: user
 *        description: The user to update account setup.
 *        schema:
 *         type: object
 *         required:
 *          - user account setup
 *         properties:
 *           country:
 *             type: string
 *             required:
 *           address:
 *             type: string
 *             required:
 *           coordinates:
 *             type: array
 *             items:
 *              type: number
 *              required:
 *           keys:
 *             type: array
 *             items:
 *              type: object
 *              properties:
 *               apiKey:
 *                type: string
 *               secretKey:
 *                type: string
 *               type:
 *                type: string
 *           required:
 *   responses:
 *    '200':
 *     description: success
 *    '400':
 *     description: fail
 */

const accountSetupSchema = Joi.object({
  country: Joi.string().trim().required().label('Country'),
  address: Joi.string().trim().required().label('Address'),
  keys: Joi.array().items(Joi.object({
    apiKey: Joi.string().required().label('Api Key'), 
    secretKey: Joi.string().required().label('Secret Key'),
    type: Joi.string().required().label('Key Type')
  })).required().label('Api Key'),
  coordinates: Joi.array().required().label('Coordinates')
});

app.put(
  '/user/account-setup',
  validator.body(accountSetupSchema, {
    joi: { convert: true, allowUnknown: false },
  }), checkToken, accountSetup,
);

export default app;
