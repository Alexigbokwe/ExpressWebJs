"use strict";
const pathTo = process.env.PWD;
module.exports = {
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
