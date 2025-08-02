// function sum (x, y) {
//     const result = x + y;
//     return result;
// }

// const total = sum(5, 8);
// console.log(total);


// function isOdd(x) {
//     if(x % 2 === 1) {
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(isOdd(122));
// console.log(isOdd(121));



// function sumOfNums(numbers) {
//     let i = 0;
//     for(const num of numbers) {
//         i += num;
//     }
//     return i;
// }

// const nums = [82, 83, 48, 84, 2, 37];
// const sum = sumOfNums(nums);
// console.log('Sum Of Numbers :', sum );


function sumOfEvenNumbers(numbers) {
    const even = []
    for(const number of numbers) {
        if(number % 2 === 0) {
            even.push(number)
        }
    }
    let sum = 0;
    for(const numbers of even) {
        sum += numbers;
    }
    const avg = sum / even.length;
    return avg;
}

const num = [9, 4, 8, 24, 21, 43, 68, 93, 100];
const sum = sumOfEvenNumbers(num);
console.log(sum);

