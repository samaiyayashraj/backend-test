/*
 * @file: detail.js
 * @description: It Contain page detail router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { detail } from '../../../controllers/page';

const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/page/{slug}:
 *  get:
 *   tags: ["page"]
 *   summary: page detail api
 *   description: api used to get page detail.
 *   parameters:
 *      - in: path
 *        name: slug
 *        type: string
 *        required: true
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 *    '404':
 *      description: Page not found
 */

const pageSchema = Joi.object({
    slug: Joi.string().trim().required().label('Slug'),
});

app.get(
  '/page/:slug',
  validator.params(pageSchema, {
    joi: { convert: true, allowUnknown: false },
  }), detail);

export default app;
