/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  return Math.random() < 0.5 ? 'heads':'tails';
}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  if(flips < 1) {
    flips = 1;
  }
  var array = [];
  for (var i=0; i<flips; i++) {
    array[i] = coinFlip();
  }

  return array;

}

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  var he = {heads: 1};
  var ta = {tails: 1};
  if(array.length === 1) {
    if(array[i] === 'heads') {
      return he;
    } else if(array[i] === 'tails') {
      retun ta;
    } else {
      return 'Error';
    }
  }
  var final = { heads: 0, tails: 0 };
  for(var i = 0; i<array.length; i++) {
    if(array[i] === 'heads') {
      final.heads++;
    } else if(array[i] === 'tails') {
      final.tails++;
    } else {
      return 'Error';
    }
  }
  return final;

}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  if(call !== 'heads' && call !== 'tails') {
    console.log("Error: no input. Usage: node guess-flip --call=[heads|tails]");
    return;
  }
  var final = { call: '', flip: '', result: '' };
  final.call = call;
  final.flip = coinFlip();
  if(final.flip === final.call) {
    final.result = 'win';
  } else {
    final.flip = 'lose';
  }
  
  return final;
}


/** Export 
 * 
 * Export all of your named functions
*/
export{flipACoin, countFlips, coinFlips, coinFlip}
