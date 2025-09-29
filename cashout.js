const cashOutAmount = 2000;

function cashOut(money) {
  if (money !== 'Number') {
    return 'Invalid'
  }

  const cashOut = (money * 1.75) / 100;
  return cashOut;
}

const cashOutCharge = cashOut(cashOutAmount);
console.log(cashOutCharge);

