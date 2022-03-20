
import {coinFlips, countFlips} from './modules/coin.mjs';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));

const num = args.number || 1;
const final = coinFlips(num);
const count = countFlips(final);
console.log(final);
console.log(count);



/*
console.log(process.argv);
//const require = createRequire(import.meta.url);
//const idk = require('./modules/coin.mjs');
console.log(process.argv[2]);
const args = (process.argv.slice(2));
if(args.length == 0) {
    console.log(coinFlips(1));
} else {

var temp = args[0];
temp = args[0].split('=');

//args['number'];
//const number = args.number;

console.log(coinFlips(temp[1]));
*/

