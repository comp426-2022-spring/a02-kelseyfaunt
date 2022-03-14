import {flipACoin} from './modules/coin.js';

console.log(process.argv);
const args = (process.argv.slice(2));
var temp = args[0];
temp = args[0].split('=');
console.log(temp);

if(args.length == 0) {
    console.log("Error: no input.");
} else if ((temp[1] != 'tails') && (temp[1] != 'heads')) {
    console.log("Usage: node guess-flip --call=[heads|tails]");
} else {
console.log(flipACoin(temp[1]));
}
