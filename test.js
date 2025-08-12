// let x = 'Heisenberg'

// let a = 0
// for (let e of x){
//     if (e.toLowerCase() === 'e'){
//         a++;
//     }
// }

// console.log(a + 1);
const N = 12;

// Write an answer using console.log()
// To debug: console.error('Debug messages...');

// const x = N.toString();
// let z = 0
// for ( let num of x ){
//     z += Number(num);
// }
// let a = 0;
// for ( let num of x ){
//     a *= Number(num);
// }

// console.log(z - a)


const heights = [12, 41, 43, 68, 56, 842, 754, 45];

function getMax(numbers) {
    let max = numbers[0];
    for(const num of numbers){
        if(num > max) {
            max = num;
        }
    }
    return max;
}

const maxHeights = getMax(heights);
console.log(maxHeights);