const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function fibRec(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  return fibRec(n - 1) + fibRec(n - 2);
}

rl.question("Digite um número para fibonacci: ", function(inputRecursivo) {
  const resultRecursivo = fibRec(parseInt(inputRecursivo));
  console.log(resultRecursivo);

  rl.close();
});

rl.on("close", function() {
  process.exit(0);
});
