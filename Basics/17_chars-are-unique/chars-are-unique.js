

const charsAreUnique = (arr) => {

    for (let i = 0; i < arr.length; i++)
    {
        for (let j = i + 1; j < arr.length; j++)
        {   if (arr[i] == arr[j])
                return false;   }
    }
    return true;
}

module.exports = charsAreUnique;

