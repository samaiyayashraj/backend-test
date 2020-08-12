/*
 * @file: page.js
 * @description: It Contain function layer for page service.
 * @author: Jasdeep Singh
 */

import Page from '../collections/page';
import { generateSlug } from '../utilities/universal';
import {LIMIT} from '../utilities/constants';

/************ Upsert page *************/
export const upsertPage = async (payload) => {
    if(payload['id']){
        return await Page.updatePage({
            ...payload,
          });
    } else {        
        payload.slug = generateSlug(payload.title);
        return await Page.savePage({
            ...payload,
          });
    }
};
/************ Get page detail *************/
export const pageDetail = async (payload) => {
    return await Page.findOneByCondition(payload).select({
        __v: 0,
        updatedAt: 0,
        status: 0
      });
};

/********** Get Pages **********/
export const pageList = async () => {
    return await Page.findByCondition({})
    .select({
        __v: 0,
        updatedAt: 0,
        status: 0
      })
      .sort([['createdAt', -1]]);
  };
