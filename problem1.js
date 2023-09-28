function printEvenOddZero(arr) {
  let even = 0;
  let odd = 0;
  let hasZero = false;
  
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') continue;
    
    if (arr[i] === 0) {
        hasZero = true
      }
    else if (arr[i] % 2 === 0) {
      even++
    }
    else odd++
  }
  
  console.log(`Even numbers: ${even}`);
  console.log(`Odd numbers: ${odd}`); 
  if (hasZero) console.log(0);
}

let arr = [0, 1, 2, 3, 4, true, false, null, "dfg", 6];

printEvenOddZero(arr)