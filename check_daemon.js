/*jslint node: true */
"use strict";
var check_daemon = require('ocore/check_daemon.js');

check_daemon.checkDaemonAndRestart('node merchant.js', 'node merchant.js 1>log 2>errlog');

