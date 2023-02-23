import commands from "./Resources/Command/index";
import kernel from "./App/Console/Kernel";
import database from "./Config/database";
import makerTs from "maker-console-ts";

/*
|--------------------------------------------------------------------------
| Run The Maker Application
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in this console and the response sent back to a terminal
|
*/
makerTs.run(commands, kernel, database.ORM);
