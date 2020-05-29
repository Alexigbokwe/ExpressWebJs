"use strict";
const pathTo = process.env.PWD;
module.exports = {
  /*
|--------------------------------------------------------------------------
| Resolver Box
|--------------------------------------------------------------------------
|
| Resolver Box helps you resolve your class. For example
| instead of:   
| const myUserService = require('@service/userService')
| const service = new myUserService();
|
| you can do this: 
| const myUserService = use('userService'); 
|
| Note: this is only applicable for classes without constructor
|
| Where userService is the service file name userService.js
|
*/
  resolverBox: ["./App/Service/**/**/*.js", "./App/Repository/**/**/*.js"],

  /*
|--------------------------------------------------------------------------
| Aliases
|--------------------------------------------------------------------------
| Create aliases of directories and register custom module paths in ExpresswebJS like a boss!
| Aliases are short unique names. You are free
| to create your own aliases.
|
| For example:
|   { "@service": pathTo + "/App/Service" }
|
*/
  aliases: {
    "@service": pathTo + "/App/Service",
    "@Repository": pathTo + "/App/Repository",
  },
};
