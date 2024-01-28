// const chalk = require("chalk");
import chalk from 'chalk';

console.log(chalk.yellow.underline.inverse("Using Chalk "));


import validator from 'validator';

const res = validator.isEmail("sakshi.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
