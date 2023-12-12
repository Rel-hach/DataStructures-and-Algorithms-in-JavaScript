

let displayLikes = arr => {
    switch (arr.length)
    {
        case 0:
            console.log('no one likes this');
            break ;

        case 1:
            console.log(`${arr[0]} likes this`);
            break ;

        case 2:
            console.log(`${arr[0]} and ${arr[1]} like this`);
            break ;

        case 3:
            console.log(`${arr[0]}, ${arr[1]} and ${arr[2]} like this`);
            break ;
        default:
            const s = arr.length - 2;
            console.log(`${arr[0]}, ${arr[1]} and ${s} like this`);
    }
}

module.exports = displayLikes;