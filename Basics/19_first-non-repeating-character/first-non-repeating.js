
const firstNonRepeating = (str) => {

    const  counter= {};

    for (const c of str){
        counter[c] = ( counter[c] || 0) + 1; }

    for (const element in counter) {
        if (counter[element] == 1)
            return (element); }

    return (null);
}

module.exports = firstNonRepeating;