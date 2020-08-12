/*
 * @file: change-password.js
 * @description: It Contain change-password router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { checkToken } from '../../../utilities/universal';
import { verifyAccount } from '../../../controllers/user';
const app = express();

/**
 * @swagger
 * /api/v1/user/verify:
 *  put:
 *   tags: ["user"]
 *   summary: Verify account api for all Users
 *   description: api used to verify account for users.
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

app.put('/user/verify', checkToken, verifyAccount);

export default app;
