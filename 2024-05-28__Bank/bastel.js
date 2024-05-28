const repl = require('repl');
const { faker } = require('@faker-js/faker');

const context = { faker };
const replObj = repl.start();
Object.assign(replObj.context, context);
