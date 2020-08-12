/*
 * @file: get.js
 * @description: It Contain binance get list router/api.
 * @author: Jasdeep Singh
 */
import express from 'express';
import { createValidator } from 'express-joi-validation';
import Joi from '@hapi/joi';
import { checkToken } from '../../../utilities/universal';
import { get } from '../../../controllers/binance';
import {BINANCE_GET_TYPE} from '../../../utilities/constants';

const app = express();
const validator = createValidator({ passError: true });

/**
 * @swagger
 * /api/v1/binance:
 *  get:
 *   tags: ["binance"]
 *   summary: binance get api
 *   description: api used to get binance.<br/><b>type</b> should be one of (currency, recent_trades, 24hrs_ticker)
 *   security:
 *    - OAuth2: [admin]   # Use Authorization
 *   parameters:
 *      - in: header
 *        name: Authorization
 *        type: string
 *        required: false 
 *      - in: query
 *        name: type
 *        type: string
 *        required: true        
 *        default: currency  
 *      - in: query
 *        name: symbol
 *        type: string
 *        default: BTCUSDT
 *   responses:
 *    '200':
 *      description: success
 *    '400':
 *      description: fail
 */

const binanceSchema = Joi.object({
    type: Joi.string().trim().required().valid(
        BINANCE_GET_TYPE.currency,
        BINANCE_GET_TYPE.recentTrades,
        BINANCE_GET_TYPE.ticker24hrs
    ).label('Type'),
    symbol: Joi.string().allow('').optional().label('Symbol')
});

  
app.get('/binance', validator.query(binanceSchema, {
    joi: { convert: true, allowUnknown: false },
  }), get);

export default app;
