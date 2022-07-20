const https = require('https')
const md5 = require('md5');

const accessId = '496C4-46AF8-6DDF3BD'
const accessKey = 'V33pygS7TQC-krihv6VT6-jQROAspJ-AE2ybGHClE-5obmBw5Hudq-qzyyuIN-HfiCeiCT9sa'

class amlbot {
    
//for BTC, ETH, LTC, BCH, TetherOMNI, XRP, TetherERC20 chains
    async addressVerification(hash, chain) { 
      try {
        return new Promise( (resolve, reject) => {
          //asset = {BTC, ETH, LTC, BCH, TetherOMNI, XRP, TetherERC20}
                    let HATtoken = md5(`${hash}:${accessKey}:${accessId}`)    
                    const options = {
                    method: 'POST',
                      url: 'https://extrnlapiendpoint.silencatech.com/',
                      headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                      },
                      body: {
                          accessId: accessId,
                          hash: hash,
                          asset: chain,
                          token: HATtoken
                      }
                    };      
                    var req =  https.request(options, 
                      function(res) {
                          // @ts-ignore
                          if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                            return reject(new Error('statusCode=' + res.statusCode));
                          }
                          // cumulate data
                         var body = [];
                          res.on('data', function (chunk) {
                            body.push(chunk);
                          });
                          // resolve on end
                          res.on('end', function () {
                            const body1 = Buffer.concat(body)
                            try {
                              body = JSON.parse(body1.toString('utf8'));
                            } catch (e) {
                              resolve(body1);
                              return
                            }
                            resolve(body1);
                            return
                          });
                        });
                      req.on('error', function (err) {
                        reject(err);
                      });
                      req.end();
        });
        
      } catch (error) {
        console.log(error);
        return false
      }
    }

//for (TRX, BSC, MATIC, ADA, ZEC, DOGE, SOL) chainc. firstStep
// from response you get UID and then you need checkByUID
    async addressVerificationFirstStep(hash, chain) { 
        return new Promise( (resolve, reject) => {

//asset = {TRX, BSC, MATIC, ADA, ZEC, DOGE, SOL}

          let HATtoken = md5(`${hash}:${accessKey}:${accessId}`)
  
          const options = {
          method: 'POST',
            url: 'https://extrnlapiendpoint.silencatech.com/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                accessId: accessId,
                hash: hash,
                asset: chain,
                token: HATtoken
            }
          };
  
          var req =  https.request(options, 
            function(res) {
                // @ts-ignore
                if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                  return reject(new Error('statusCode=' + res.statusCode));
                }
                // cumulate data
               var body = [];
                res.on('data', function (chunk) {
                  body.push(chunk);
                });
                // resolve on end
                res.on('end', function () {
                  const body1 = Buffer.concat(body)
                  try {
                    body = JSON.parse(body1.toString('utf8'));
                  } catch (e) {
                    resolve(body1);
                    return
                  }
                  resolve(body1);
                  return
                });
              });
            req.on('error', function (err) {
              reject(err);
            });
            req.end();
          });
    }


//for BTC, ETH, LTC, BCH, TetherOMNI, XRP, TetherERC20 chains
//direction  - if the funds were sent to your address, direction = deposit, 
//if you sent the funds from your address, direction = withdrawal
    async transactionVerification(hash, address,  direction, chain) { 
        return new Promise( (resolve, reject) => {

          let HATtoken = md5(`${hash}:${accessKey}:${accessId}`)
  
          const options = {
          method: 'POST',
            url: 'https://extrnlapiendpoint.silencatech.com/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                accessId: accessId,
                hash: hash,
                address: address,
                direction: direction,
                asset: chain,
                token: HATtoken
            }
          };
  
          var req =  https.request(options, 
            function(res) {
                // @ts-ignore
                if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                  return reject(new Error('statusCode=' + res.statusCode));
                }
                // cumulate data
               var body = [];
                res.on('data', function (chunk) {
                  body.push(chunk);
                });
                // resolve on end
                res.on('end', function () {
                  const body1 = Buffer.concat(body)
                  try {
                    body = JSON.parse(body1.toString('utf8'));
                  } catch (e) {
                    resolve(body1);
                    return
                  }
                  resolve(body1);
                  return
                });
              });
            req.on('error', function (err) {
              reject(err);
            });
            req.end();
          });
    }

//for (TRX, BSC, MATIC, ADA, ZEC, DOGE, SOL) chains. firstStep
// from response you get UID and then you need checkByUID
//direction  - if the funds were sent to your address, direction = deposit, 
//if you sent the funds from your address, direction = withdrawal
    async transactionVerificationFirstStep(hash, address,  direction, chain) { 
        return new Promise( (resolve, reject) => {

          let HATtoken = md5(`${hash}:${accessKey}:${accessId}`)
  
          const options = {
          method: 'POST',
            url: 'https://extrnlapiendpoint.silencatech.com/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                accessId: accessId,
                hash: hash,
                address: address,
                direction: direction,
                asset: chain,
                token: HATtoken
            }
          };
  
          var req =  https.request(options, 
            function(res) {
                // @ts-ignore
                if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                  return reject(new Error('statusCode=' + res.statusCode));
                }
                // cumulate data
               var body = [];
                res.on('data', function (chunk) {
                  body.push(chunk);
                });
                // resolve on end
                res.on('end', function () {
                  const body1 = Buffer.concat(body)
                  try {
                    body = JSON.parse(body1.toString('utf8'));
                  } catch (e) {
                    resolve(body1);
                    return
                  }
                  resolve(body1);
                  return
                });
              });
            req.on('error', function (err) {
              reject(err);
            });
            req.end();
          });
    }

// just for BTC, ETH, LTC, BCH, TetherOMNI chains
    async addressInvestigation(hash, chain, expanded) {
        return new Promise( (resolve, reject) => {

            let HATtoken = md5(`${hash}:${accessKey}:${accessId}`)
    
            const options = {
            method: 'POST',
              url: 'https://extrnlapiendpoint.silencatech.com/',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: {
                  accessId: accessId,
                  hash: hash,
                  asset: chain,
                  token: HATtoken,
                  expanded: expanded
              }
            };
    
            var req =  https.request(options, 
              function(res) {
                  // @ts-ignore
                  if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                    return reject(new Error('statusCode=' + res.statusCode));
                  }
                  // cumulate data
                 var body = [];
                  res.on('data', function (chunk) {
                    body.push(chunk);
                  });
                  // resolve on end
                  res.on('end', function () {
                    const body1 = Buffer.concat(body)
                    try {
                      body = JSON.parse(body1.toString('utf8'));
                    } catch (e) {
                      resolve(body1);
                      return
                    }
                    resolve(body1);
                    return
                  });
                });
              req.on('error', function (err) {
                reject(err);
              });
              req.end();
            });

    }

//user history requests
    async historyRequest(pageReq) {
        return new Promise( (resolve, reject) => {

            if(pageReq === null || undefined || '') {
                pageReq = 0
            }

            let PATtoken = md5(`${pageReq}:${accessKey}:${accessId}`)
    
            const options = {
            method: 'POST',
              url: 'https://extrnlapiendpoint.silencatech.com/history/',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              },
              body: {
                  accessId: accessId,
                  page: pageReq,
                  token: PATtoken,
              }
            };
    
            var req =  https.request(options, 
              function(res) {
                  // @ts-ignore
                  if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                    return reject(new Error('statusCode=' + res.statusCode));
                  }
                  // cumulate data
                 var body = [];
                  res.on('data', function (chunk) {
                    body.push(chunk);
                  });
                  // resolve on end
                  res.on('end', function () {
                    const body1 = Buffer.concat(body)
                    try {
                      body = JSON.parse(body1.toString('utf8'));
                    } catch (e) {
                      resolve(body1);
                      return
                    }
                    resolve(body1);
                    return
                  });
                });
              req.on('error', function (err) {
                reject(err);
              });
              req.end();
            });

    }
    
////aml tariff plans
    async AMLtariffPlans() {
        return new Promise( (resolve, reject) => {
   
            const options = {
            method: 'GET',
              url: 'https://extrnlapiendpoint.silencatech.com/plans/',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };
    
            var req =  https.request(options, 
              function(res) {
                  // @ts-ignore
                  if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                    return reject(new Error('statusCode=' + res.statusCode));
                  }
                  // cumulate data
                 var body = [];
                  res.on('data', function (chunk) {
                    body.push(chunk);
                  });
                  // resolve on end
                  res.on('end', function () {
                    const body1 = Buffer.concat(body)
                    try {
                      body = JSON.parse(body1.toString('utf8'));
                    } catch (e) {
                      resolve(body1);
                      return
                    }
                    resolve(body1);
                    return
                  });
                });
              req.on('error', function (err) {
                reject(err);
              });
              req.end();
            });

    }

// just for TRX, BSC, MATIC ,ADA, ZEC, DOGE, SOLANA, TRC20 tokens and BEP20 tokens
// second step. you need to do this func after first step where u get uid
    async checkByUID(uid, chain) { 
        return new Promise( (resolve, reject) => {

          let UATtoken = md5(`${uid}:${accessKey}:${accessId}`)
  
          const options = {
          method: 'POST',
            url: 'https://extrnlapiendpoint.silencatech.com/',
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: {
                accessId: accessId,
                uid: uid,
                asset: chain,
                token: UATtoken
            }
          };
  
          var req =  https.request(options, 
            function(res) {
                // @ts-ignore
                if ((res && res.statusCode < 200) || (res && res?.statusCode >= 300)) {
                  return reject(new Error('statusCode=' + res.statusCode));
                }
                // cumulate data
               var body = [];
                res.on('data', function (chunk) {
                  body.push(chunk);
                });
                // resolve on end
                res.on('end', function () {
                  const body1 = Buffer.concat(body)
                  try {
                    body = JSON.parse(body1.toString('utf8'));
                  } catch (e) {
                    resolve(body1);
                    return
                  }
                  resolve(body1);
                  return
                });
              });
            req.on('error', function (err) {
              reject(err);
            });
            req.end();
          });
    }   
}

module.exports = amlbot