const readline = require('readline');

const rlLinear = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function primosLin(n) {
  if (n < 2) {
    console.log("Tem que ser maior que 1.");
    return [];
  }

  let primos = [];

  for (let i = 2; i <= n; i++) {
    let numPrimo = true;

    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        numPrimo = false;
        break;
      }
    }

    if (numPrimo) {
      primos.push(i);
    }
  }

  return primos;
}

rlLinear.question("Digite um número para encontrar primos: ", function(inputLinear) {
  const resultLinear = primosLin(parseInt(inputLinear));
  console.log(resultLinear);

  rlLinear.close();
});

rlLinear.on("close", function() {
  process.exit(0);
});
