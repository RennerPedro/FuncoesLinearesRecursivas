const readline = require('readline');

const rlRecursivo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function primosRec(n, numero = 2, primos = []) {
    if (n < 2) {
      console.log("Tem que ser maior que 1.");
      return [];
    }
  
    if (numero > n) {
      return primos;
    }
  
    let numPrimo = true;
  
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        numPrimo = false;
        break;
      }
    }
  
    if (numPrimo) {
      primos.push(numero);
    }
  
    return primosRec(n, numero + 1, primos);
  }
  
  rlRecursivo.question("Digite um número par encontrar primos: ", function(inputRecursivo) {
    const resultRecursivo = primosRec(parseInt(inputRecursivo));
    console.log(resultRecursivo);
  
    rlRecursivo.close();
  });
  
  rlRecursivo.on("close", function() {
    process.exit(0);
  });
  