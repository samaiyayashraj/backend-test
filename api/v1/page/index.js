/*
 * @file: index.js
 * @description: It's combine all page routers.
 * @author: Jasdeep Singh
 */

import upsert from './upsert';
import detail from './detail';
import list from './list';

export default [upsert, detail, list];