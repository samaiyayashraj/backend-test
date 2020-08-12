/*
 * @file: binance.js
 * @description: It Contain function layer for binance controller.
 * @author: Jasdeep Singh
 */

import { successAction, failAction } from '../utilities/response';
import {
    getCurrencies, getRecentTrades, get24hrsTickers
  } from '../services/binance';
import Message from '../utilities/messages';
import {BINANCE_GET_TYPE} from '../utilities/constants';

/**************** Get binance ***********/
export const get = async (req, res, next) => {
    const payload = req.query;
    try {
      let data = await getCurrencies();
      switch(payload.type){
          case BINANCE_GET_TYPE.recentTrades:
          data = await getRecentTrades(payload);
          break;
          case BINANCE_GET_TYPE.ticker24hrs:
          data = await get24hrsTickers(payload);
          break;
      }  
      res.status(200).json(successAction(data, Message.success));
    } catch (error) {
      res.status(400).json(failAction(error.message));
    }
  };