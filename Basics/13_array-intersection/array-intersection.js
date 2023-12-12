let arrayIntersectionn = (firstArr, secondArr) => {
    
    let neuArr = [];

    for (let i = 0; i < firstArr.length; i++)
    {
        if (secondArr.includes(firstArr[i]) && !neuArr.includes(firstArr[i]))
            neuArr.push(firstArr[i]);
    }
    return (neuArr);
}

module.exports = arrayIntersectionn;