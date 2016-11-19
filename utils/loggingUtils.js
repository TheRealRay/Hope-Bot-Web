//=========================================================
// Imports
//=========================================================
var winston = require('winston');

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)({
      colorize: true
    }),
    new (winston.transports.File)({
      name: 'error-log',
      filename: 'logs/error.log',
      level: 'error'
    }),
    new (winston.transports.File)({
      name: 'info-log',
      filename: 'logs/info.log',
      level: 'info',
      maxFiles: 10,
      maxsize: 100000
    })
  ]
});

module.exports = logger;
