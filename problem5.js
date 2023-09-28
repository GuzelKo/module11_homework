let pow = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
};

let x = prompt("Введите x");
let n = prompt("Введите n");

if (n >= 1 && n % 1 == 0) {
  console.log( pow(x, n) );
} else {
  console.log(`Степень ${n} не поддерживается, используйте натуральное число`);
};