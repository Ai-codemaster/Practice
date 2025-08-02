function noDuplicate(array) {
    const unique = [];
    for(const item of array) {
        if(unique.includes(item) === false)
            unique.push(item);
    }
    return unique;
}



const nums = [2, 3, 2, 5, 7, 3, 11, 9, 7, 5, 19, 30, 11, 5];
console.log(noDuplicate(nums));