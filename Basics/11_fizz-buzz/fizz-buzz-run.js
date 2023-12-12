const fizzBuzz = require('./fizz-buzz');


let arr = [];

let i = 1;

while (i <= 100)
{   arr.push(i);
    i++; }

fizzBuzz(arr);