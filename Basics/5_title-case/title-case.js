function titleCase(str) {
    let arrOfstr = str.toLowerCase().split(" ");
    let sentence = "";

    for (let i = 0; i < arrOfstr.length; i++)
    {
        arrOfstr[i] = arrOfstr[i].charAt(0).toUpperCase() + arrOfstr[i].substr(1);
        if (i != arrOfstr.length - 1)
            sentence += arrOfstr[i] + ' ';
        else
            sentence += arrOfstr[i];
    }
    return (sentence);
}

module.exports = titleCase;