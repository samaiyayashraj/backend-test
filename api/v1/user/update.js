/*
 * @file: update.js
 * @description: It Contain update user router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { update } from '../../../controllers/user';
import { checkToken } from '../../../utilities/universal';
const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/user:
 *  put:
 *   tags: ["user"]
 *   summary: user update api
 *   description: api used to update users.<br/><b>role</b> should be 2 => client, 3 => trader<br/><b>location</b> coordinates should be array like <b>[long, lat]</b>.
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: user
 *        description: The user to update.
 *        schema:
 *         type: object
 *         required:
 *          - user update
 *         properties:
 *           firstName:
 *             type: string
 *           lastName:
 *             type: string
 *           username:
 *             type: string
 *           country:
 *             type: string
 *           address:
 *             type: string
 *           coordinates:
 *             type: array
 *             items:
 *              type: number
 *              required:
 *           keys:
 *             type: object
 *             properties:
 *              apiKey:
 *               type: string
 *               required:
 *              secretKey:
 *               type: string
 *               required:
 *           settings:
 *             type: object
 *             properties:
 *              notifications:
 *               type: boolean
 *               required:
 *   responses:
 *    '200':
 *     description: success
 *    '400':
 *     description: fail
 */

const regiterSchema = Joi.object({
  firstName: Joi.string().trim().optional().label('First Name'),
  lastName: Joi.string().trim().optional().label('Last Name'),
  username: Joi.string().trim().optional().label('Username'),
  country: Joi.string().trim().optional().label('Country'),
  address: Joi.string().trim().optional().label('Address'),
  keys: Joi.object({
    apiKey: Joi.string().required().label('Api Key'),
    secretKey: Joi.string().required().label('Secret Key')
  }).optional().label('Api Key'),
  coordinates: Joi.array().optional().label('Coordinates'),
  role: Joi.string().trim().optional().label('Role'),
  settings: Joi.object({
    notifications: Joi.boolean().required().label('Notifications')
  })
    .optional()
    .label('Settings'),
});

app.put(
  '/user',
  validator.body(regiterSchema, {
    joi: { convert: true, allowUnknown: false },
  }), checkToken, update,
);

export default app;
