/*
 * @file: db-schema.js
 * @description: It Contain db schema for page collection.
 * @author: Jasdeep Singh
 */

import mongoose from 'mongoose';

const pageSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      default: ''
    },
    pageImage: {
      type: String,
      default: ''
    },
    status: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'page'
    }
  },
  { timestamps: true }
);

export default pageSchema;