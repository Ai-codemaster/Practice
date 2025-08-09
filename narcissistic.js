

function digit(a) {
  let digit = a.toString();
  let power = digit.length;
  let sum = 0;

  for (let digits of digit){
    sum += digits ** power;
  }

  if(a === sum){
    return true;
  }
  else{
    return false;
  }
}

console.log(digit(1532));