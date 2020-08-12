/*
 * @file: list.js
 * @description: It Contain page list router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { checkToken } from '../../../utilities/universal';
import { list } from '../../../controllers/page';

const app = express();

/**
 * @swagger
 * /api/v1/page:
 *  get:
 *   tags: ["page"]
 *   summary: page list api
 *   description: api used to get page list.
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: true
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

app.get('/page', checkToken, list);

export default app;
