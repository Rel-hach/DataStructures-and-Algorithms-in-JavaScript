
/*

this is the hard coded method


function isPalindrome (str) {
    const formattedStr = str.formatString(str);
    if (formattedStr.length == 0 || formattedStr.length == 1) return (true);
    if (formattedStr.length % 2 == 0) return (false);
    
    let l = formattedStr.length - 1;
    
    for (let i = 0; i < formattedStr.length / 2; i++, l--)
    {
        if (formattedStr[i] != formattedStr[l]) return false;
    }
    return (true);
}


function formatString(str)
{
    let s = '';
    for (let i = 0; i < str.length; i++)
    {
        if (isAlphaNumeric(str[i]))
        s += str[i];
    }
    return (s);
}


function isAlphaNumeric (c)
{
    const cc = c.charCodeAt(0);
    
    return (
        (charCode >= 65 && charCode <= 90) ||  // A-Z
        (charCode >= 97 && charCode <= 122) || // a-z
        (charCode >= 48 && charCode <= 57)    // 0-9
        );
}
    
    
    
*/
    
    
    
    
    // using our reverseString function from last exercice.
    
const reverseString = require('../6_reverse-string/reverse-string');

function isPalindrome (str)
{

    const formattedStr = str.toLowerCase().replace(/[a-zaA-Z0-9]/g, ''); // replacing any non alphanumeric char with nothing.
    const reversed = reverseString(formattedStr);
    return (reversed === str);
}


/*----------------------------------------------------------------------------------------------------------------*/ 

// we can also split our string with empty string '' to have an array of char then reverse the array using reverse function
// then join the characters of the array with join() to have a reversed string.
// const rev = str.split("").reverse().join('');



module.exports = isPalindrome;



