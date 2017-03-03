if (process.env.NODE_ENV === undefined) {
  process.env.NODE_ENV = 'development';
}
Error.stackTraceLimit = 20;
require('./server/');
