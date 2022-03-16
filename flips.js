
import {coinFlips, countFlips} from './modules/coin.js';
import {createRequire} from 'module';

const require = createRequire(import.meta.url);
const args = require('minimist')(process.argv.slice(2));
args['number'];
if(args.length == 0) {
    console.log(1, coinFlips(1));
}

const number = coinFlips(args.number);
console.log(number, coinFlips(number));



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

