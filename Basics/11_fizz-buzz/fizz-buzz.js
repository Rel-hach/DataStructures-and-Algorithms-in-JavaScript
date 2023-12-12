

let fizzBuzz = function (arr) {

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) console.log(`number: ${arr[i]} ==> FizzBuzz`);
        else if (arr[i] % 3 == 0) console.log(`number: ${arr[i]} ==> Fizz`);
        else if (arr[i] % 5 == 0) console.log(`number: ${arr[i]} ==> Buzz`);
    }
}

module.exports = fizzBuzz;