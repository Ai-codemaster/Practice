function countOperations(a, b) {
  let operations = 0;

  while (a > 0 && b > 0) {
    if (a === b) {
      operations++; 
      break;
    } else if (a > b) {
      operations += Math.floor(a / b);
      a = a % b;
    } else {
      operations += Math.floor(b / a);
      b = b % a;
    }
  }

  return operations;
}

// Example:
const a = 40;
const b = 17;
console.log(countOperations(a, b));
