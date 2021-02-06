const { commands } = require("./Bootstrap/Command");
const kernel = require("./App/Console/kernel");
const maker = require("maker-console");

/*
|--------------------------------------------------------------------------
| Run The Maker Application
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in this console and the response sent back to a terminal
|
*/

maker.run(commands, kernel);
