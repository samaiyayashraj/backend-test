/*
 * @file: index.js
 * @description: It's combine all routers.
 * @author: Jasdeep Singh
 */

import user from './user';
import page from './page';
import binance from './binance';
import payment from './payment';

/*********** Combine all Routes ********************/
export default [...user, ...page, ...binance, ...payment];
