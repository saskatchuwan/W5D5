const readline = require('readline');

const reader = readline.createInterface ({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Provide a number: ", function(numStr){
      const num = parseInt(numStr);
      sum += num;
      numsLeft -= 1;
      console.log(`Current partial sum is ${sum}!`);
      addNumbers(sum, numsLeft, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));