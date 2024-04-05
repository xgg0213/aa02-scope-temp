/***********************************************************************
Write a function named `smoothieMachine` that accepts any number of params and
a function.

The return function will also accept any number of params and will return a
string including all of the parameters of smoothieMachine and the return
function.

See below for examples:

let smoothie1 = smoothieMachine();

console.log(smoothie1("milk"));
// prints "I'm having a smoothie with milk"
console.log(smoothie1("kale", "spinach"));
// prints "I'm having a smoothie with milk and kale and spinach"
console.log(smoothie1("honey", "pears", "berries"));
// prints "I'm having a smoothie with milk and kale and spinach and honey and pears and berries"

let smoothie2 = smoothieMachine("apples", "bananas", "berries");
console.log(smoothie2("pineapple"));
// prints "I'm having a smoothie with apples and bananas and berries and pineapple"
***********************************************************************/

// Your code here 
const smoothieMachine = (...p) => {
  let initial = "I'm having a smoothie with";
  let arr = initial.split(' ');
  if (p.length>0) {
    arr.push(p[0]);

    for (let i = 1; i<p.length; i++) {
      arr.push('and', p[i]);
    }
  }

  return (...p1) => { 
    if (arr[arr.length-1] === 'with' ) {
      if (p1.length > 0) { // if (p1.length) also works
        arr.push(p1[0]);
        for (let i = 1; i< p1.length; i++) {
          arr.push('and', p1[i]);
        }
      }
    }
    else {
      for (let i = 0; i<p1.length; i++) {
        arr.push('and', p1[i]);
      }
    }
    return arr.join(' ');
  }
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = smoothieMachine;
} catch (e) {
  // catch the ref err
  module.exports = null;
}
