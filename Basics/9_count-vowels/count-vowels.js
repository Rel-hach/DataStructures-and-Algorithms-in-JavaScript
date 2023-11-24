function countVowels(str) {
    let count = 0;

    for (let i = 0; i < str.length; i++)
    {
        if (isVowel(str[i]))
            count++;
    }
    return (count);
}


function isVowel (c)
{
    return (c === 'i' || c === 'o' || c == 'u' || c == 'a' || c == 'e');
}

module.exports = countVowels;