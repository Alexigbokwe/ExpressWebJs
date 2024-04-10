import commands from "./Resources/Command";
import kernel from "./App/Console/Kernel";
import database from "./Config/Database";
import { Console } from "maker-console-ts";

/*
|--------------------------------------------------------------------------
| Run The Maker Application
|--------------------------------------------------------------------------
|
| When we run the console application, the current CLI command will be
| executed in this console and the response sent back to a terminal
|
*/
Console.run(commands, kernel, database.ORM);
