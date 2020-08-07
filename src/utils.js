const chalk = require("chalk");

function calc(value) {
  try {
    if (value === undefined) {
      return console.log(chalk.yellow.inverse("please enter a value"));
    }
    const result = eval(value);
    console.log(chalk.green(result));
  } catch (e) {
    return console.log(chalk.red.inverse("invalid input"));
  }
}

module.exports = calc;
