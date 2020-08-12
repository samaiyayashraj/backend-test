/*
 * @file: page.js
 * @description: It Contain function layer for page controller.
 * @author: Jasdeep Singh
 */

import { successAction, failAction } from '../utilities/response';
import {
    upsertPage, pageDetail, pageList
  } from '../services/page';
import Message from '../utilities/messages';
import { ROLE } from '../utilities/constants';

/**************** Upsert Page ***********/
export const upsert = async (req, res, next) => {
    if(req.user.role !== ROLE.admin) return res.status(401).json(failAction(Message.unauthorizedUser, 401));
    const payload = req.body;
    try {
      await upsertPage(payload);
      res.status(200).json(successAction(null, Message.upsert));
    } catch (error) {
      res.status(400).json(failAction(error.message));
    }
  };

/**************** Get page detail ***********/
export const detail = async (req, res, next) => {
    const payload = req.params;
    try {
      const data = await pageDetail(payload);
      if(data){
        res.status(200).json(successAction(data, Message.success));
      } else {
        res.status(404).json(failAction(Message.notFound, 404));
      } 
    } catch (error) {
      res.status(400).json(failAction(error.message));
    }
};
/************** Get page list ************/
export const list = async (req, res, next) => {
  try {
    const data = await pageList(); 
    res.status(200).json(successAction(data, Message.success));
  } catch (error) {
    res.status(400).json(failAction(error.message));
  }
};