function countVowels(str) {

    const nstr = str.toLowerCase();
    let count = 0;

    for (let i = 0; i < nstr.length; i++)
    {
        if (isVowel(nstr[i]))
            count++;
    }
    return (count);
}


function isVowel (c)
{
    return (c === 'i' || c === 'o' || c == 'u' || c == 'a' || c == 'e');
}

module.exports = countVowels;