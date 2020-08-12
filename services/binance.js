import config from 'config';
import Request from 'request';
import Binance from 'node-binance-api';
//https://ccxt.pro/
const ccxtpro = require ('ccxt.pro');
//console.log(ccxtpro)
const binance = async () => {
   const exchange = new ccxtpro.binance({ enableRateLimit: true });
    //const exchange = new ccxtpro.bitmex({ enableRateLimit: true });
    while (true) {
        // const orderbook = await exchange.watchOrderBook ('ETH/BTC');
        // console.log (orderbook, orderbook['asks'][0], orderbook['bids'][0]);
        // const ticker = await exchange.watchTicker ('ETH/BTC');
        // console.log (new Date (), ticker);
        // const tickers = await exchange.watchOHLCV('ETH/BTC');
        // console.log (new Date (), tickers);
        const trades = await exchange.watchTrades('ETH/BTC');
        console.log (new Date (), trades);
    }
};

//binance();
const { key, secret, baseUrl } = config.get('binance');

const _Binance = new Binance().options({
    APIKEY: key,
    APISECRET: secret
});

const _Request = ({url, method, form = null}) => {
    let options = {
        url,
        method,
        headers: {
          'Content-Type': 'application/json',
          'X-MBX-APIKEY': key
        }
    };       
    if(form){ 
        options = {...options, form};
    }   
    return new Promise((resolve,reject) => {
        Request(options, (error, response, body) => { 
            if (!error && response.statusCode == 200) {
              resolve(JSON.parse(body));
            } else if (!error && response.statusCode == 400) {
              reject(response);
            } else {
              reject(error);
            }
        });
    });
};

/************** Maintain Market Depth Cache Locally via WebSocket ***************/
export const websockets = () => {
    _Binance.websockets.depthCache(['BNBBTC'], function(symbol, depth) {
      let max = 10; // Show 10 closest orders only
      let bids = _Binance.sortBids(depth.bids, max);
      let asks = _Binance.sortAsks(depth.asks, max);
      console.log(symbol+' depth cache update');
      console.log('asks', asks);
      console.log('bids', bids);
      console.log('ask: '+_Binance.first(asks));
      console.log('bid: '+_Binance.first(bids));
    });
};    
// websockets();
/************** Get all currencies *********/
export const getCurrencies = async () => {
    const data = await _Request({url: `${baseUrl}/api/v3/exchangeInfo?`, method: 'GET'});
    return data.symbols.map(row => row.symbol);
};
/************** Get recent trades *********/
export const getRecentTrades = async (payload) => {
    return await _Request({url: `${baseUrl}/api/v3/trades?symbol=${payload.symbol}`, method: 'GET'});
};
/************** Get 24hrs ticker *********/
export const get24hrsTickers = async (payload) => {
    return await _Request({url: `${baseUrl}/api/v3/ticker/24hr?symbol=${payload.symbol}`, method: 'GET'});
};