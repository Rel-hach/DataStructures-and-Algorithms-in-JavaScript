
/*
let checkIfExist = function(element, noDupArr){

    for (let i = 0; i < noDupArr.length; i++) {
        if (noDupArr[i] === element)
            return false; }

    return true;
}

let removeDuplicates = function (arr) {

    let noDupArr = [];

    for (let i = 0; i < arr.length; i++)
    {   if (checkIfExist(arr[i], noDupArr))
            noDupArr.push(arr[i]); }

    return (noDupArr);
}

*/



  //  simple way using includes


    let removeDuplicates = function ( arr ) {

        const uniqueArr = [];

        for (let i = 0; i < arr.length; i++)
        {
            if (!uniqueArr.includes(arr[i])) // it will get pushed if it's not included.
                uniqueArr.push(arr[i]);
        }
    }



module.exports = removeDuplicates;