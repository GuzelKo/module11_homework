function isPrime(num) {
  if (typeof num !== 'number' || !Number.isInteger(num)) {
    console.log("Данные неверны!");
    return undefined;
  }
  if (num < 2) return false;
  if (num > 1000) {
    console.log("Данные неверны!");
    return undefined;
  }
  if (num === 2) return true;
  
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false
  }
  return true
}

let x = isPrime(6)
console.log(x);