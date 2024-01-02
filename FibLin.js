const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibLin(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let a = 0;
  let b = 1;
  let temp;

  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }

  return b;
}

rl.question("Digite um numero para fibonacci: ", function(inputLinear) {
  const resultLinear = fibLin(parseInt(inputLinear));
  console.log(resultLinear);

  rl.close();
});

rl.on("close", function() {
  process.exit(0);
});
