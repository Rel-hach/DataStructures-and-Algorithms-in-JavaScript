function calculator( x, y, symbol ) {
   
    let result;

    switch(symbol)
    {
        case '+':
            result = x + y; break;

        case '-':
            result = x - y; break;

        case '*':
            result = x * y; break;

        case '/':
            result = x / y; break;

        default :
            throw new Error('You entered an Invalid Operator');
    }

    return (result);
}

module.exports = calculator;