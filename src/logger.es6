let winston = require('winston');

let logger = new (winston.Logger)({
    transports: [
        new (winston.transports.Console)({ json: false, timestamp: true, level: 'debug' }),
    ],
    exceptionHandlers: [
        new (winston.transports.Console)({ json: false, timestamp: true }),
    ],
    exitOnError: false
});

module.exports = logger;