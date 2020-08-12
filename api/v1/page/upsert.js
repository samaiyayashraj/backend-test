/*
 * @file: upsert.js
 * @description: It Contain upsert router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { upsert } from '../../../controllers/page';
import { checkToken } from '../../../utilities/universal';

const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/page:
 *  post:
 *   tags: ["page"]
 *   summary: page upsert api
 *   description: api used to upsert pages.<br/><b>id</b> is an optional field, it's required in case of update page.<br/><b>pageImage</b> is an optional field.
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *      - in: body
 *        name: user
 *        description: The upsert page.
 *        schema:
 *         type: object
 *         required:
 *          - upsert page
 *         properties:
 *           id:
 *             type: string
 *           title:
 *             type: string
 *             required:
 *           description:
 *             type: string
 *           content:
 *             type: string
 *           pageImage:
 *             type: string
 *             required:
 *           status:
 *             type: boolean
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 *    '401':
 *      description: un-authorized
 */

const pageSchema = Joi.object({
  id: Joi.string().trim().optional().label('Page Id'),
  title: Joi.string().trim().required().label('Page Title'),
  description: Joi.string().trim().optional().allow('').label('Decription'),
  content: Joi.string().trim().optional().allow('').label('Content'),
  pageImage: Joi.string().trim().optional().allow('').label('Page Image'),
  status: Joi.boolean().optional().label('Status')
});

app.post(
  '/page',
  validator.body(pageSchema, {
    joi: { convert: true, allowUnknown: false },
  }), checkToken, upsert);

export default app;
