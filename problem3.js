function giveSum(num1) {
  return (num2) => {
    return num1 + num2;
  }
}

const sum = giveSum(3);
console.log(sum(8));