import config from 'config';
import Request from 'request';

const {baseUrl, merchantAccount} = config.get('payment');

const _Request = ({url, method, form = null}) => {
    let options = {
        url,
        method,
        headers: {
          'Content-Type': 'application/json'
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

/************** payment charge *********/
export const chargeCard = async (payload) => {
    return await _Request({
        url: `${baseUrl}/v52/payments`, 
        method: 'POST',
        form: JSON.stringify({
            'amount': {
              'currency': 'USD',
              'value': 1000
            },
            'reference': new Date().getTime().toString(),
            'paymentMethod': {
              'type': 'scheme',
              'number': '4111111111111111',
              'expiryMonth': '03',
              'expiryYear': '2030',
              'holderName': 'John Smith',
              'cvc': '737'
            },
            'returnUrl': 'https://dev.figjam.net',
            'merchantAccount': merchantAccount
          })
    });
};