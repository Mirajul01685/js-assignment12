let sum = 0;

for (let i = 1; i <= 500; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    sum += i; 
  }
}

console.log("The sum of values divisible by both 3 and 5 up to 500 is:", sum);