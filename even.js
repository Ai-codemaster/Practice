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

