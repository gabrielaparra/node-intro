var chalk = require('chalk');
var error = chalk.bold.red;
var kirbyDance = require('kirby-dance');
var cows = require('cows');

console.log(chalk.blue('Hello, world.'));

for (var i = 1; i <= 10; i++) {
  console.log("Hello Node #" + chalk.cyan(i));
}

console.log(error('Hello, world.'));

console.log(chalk.magenta(kirbyDance(-3)));


//Lists all the cows with their index number
function allOftheCows() {
  for (i = 0; i < cows().length; i++) {
    console.log('#' + i);
    console.log(cows()[i]);
  }
}

allOftheCows();
