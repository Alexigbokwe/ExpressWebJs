import { Route } from "Elucidate/Route/RouteManager";
import { Request, Response } from "Config/http";

/*
    |--------------------------------------------------------------------------
    | Api route   
    |--------------------------------------------------------------------------
    |
    | Here is where you can register your application routes. These
    | routes are loaded by the RouteProvider. Now create something great!
    |
*/

Route.get("/", (req: Request, res: Response) => {
  res.send("Welcome to ExpressWebJs Version 4.2");
});

//--------------------------------------------------------------------------
export default Route.exec;
