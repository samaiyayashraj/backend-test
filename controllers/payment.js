/*
 * @file: payment.js
 * @description: It Contain function layer for payment controller.
 * @author: Jasdeep Singh
 */

import { successAction, failAction } from '../utilities/response';
import {
    chargeCard
  } from '../services/payment';
import Message from '../utilities/messages';

  /**************** Payment charge ***********/
export const paymentCharge = async (req, res, next) => {
    const payload = req.body;
    try {
      let data = await chargeCard(payload);
      res.status(200).json(successAction(data, Message.success));
    } catch (error) {
      res.status(400).json(failAction(error ? error.message : 'Failed'));
    }
  };