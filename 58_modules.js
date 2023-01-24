const hello = require('./module1');
const func= require('./module1');
const { surat, bombay } = require('./module2');

// import  from './module1';
import harry,{ hello,Ad_hello } from './module1.js';
hello();
func();

surat();
bombay();

hello();
Ad_hello();
harry();