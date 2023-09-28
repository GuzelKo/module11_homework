let num1 = prompt("Enter a number (from 0 to 20)");
let num2 = prompt("Enter a bigger number (from 0 to 20)");

function showNumbers(num1, num2) {
  let currentNum = num1;
    
  let timerId = setInterval(function2, 1000);
  console.log(currentNum);
  
  function function2() {
    currentNum++
    if (currentNum == num2) {
      clearInterval(timerId)
    }
      console.log(currentNum);
  }
}

showNumbers(num1, num2)