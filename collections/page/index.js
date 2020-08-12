/*
 * @file: index.js
 * @description: It Contain function layer for page collection.
 * @author: Jasdeep Singh
 */

import mongoose from 'mongoose';
import dbSchema from './db-schema';

class PageClass {
  static findByCondition(condition) {
    return this.find(condition);
  }
  static findOneByCondition(condition) {
    return this.findOne(condition);
  }
  static savePage(payload) {
    return this(payload).save();
  }
  static updatePage(payload) {
    const updateData = {      
      $set: payload
    };
    return this.findByIdAndUpdate(payload.id, updateData);
  }
}

dbSchema.loadClass(PageClass);

export default mongoose.model('pages', dbSchema);