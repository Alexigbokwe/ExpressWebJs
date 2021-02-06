"use strict";

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Application level Middleware
  |--------------------------------------------------------------------------
  |
  | The application's global HTTP middleware stack.
  |
  | These middlewares are run during every request to your application.
  |
  */
  applicationLevelMiddleware: [
    "App/Http/Middleware/CheckForMaintenanceMode",
    "App/Http/Middleware/ConvertEmptyStringsToNull",
  ],

  /*
  |--------------------------------------------------------------------------
  | Route Middleware
  |--------------------------------------------------------------------------
  |
  | Route middleware is a key/value object to conditionally add middleware on
  | specific routes or assigned to group of routes.
  |
  | // define
  | {
  |   auth: 'App/Http/Middleware/Auth'
  | }
  |
  | // in your route add ["auth"]
  |
  */
  routeMiddleware: {
    //auth: "App/Http/Middleware/Auth",
  },
};
