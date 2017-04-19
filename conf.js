/*jslint node: true */
"use strict";

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;
exports.bIgnoreUnpairRequests = true;


exports.storage = 'sqlite';

exports.hub = 'byteball.org/bb';
exports.deviceName = 'Merchant Demo';
exports.permanent_paring_secret = '0000';
exports.KEYS_FILENAME = 'keys.json';

// home wallet (replace these values with the properties of your wallet that is to collect the revenue from sales)
exports.xPubKey = 'xpub6BjEX9yj9SXLBpnWvqA7ryKbpzLjHJMfZYQsbCQa9jPZtN6mPw3eYcbxUuiVGakdLezMvAQq5XWBzUkCsGfD1k5mh8Sm9M7pxDWBVMariGE';
exports.account = 6;
exports.homeDeviceAddress = '0DTZZY6J27KSEVEXL4BIGTZXAELJ47OYW';


console.log('finished merchant conf');
