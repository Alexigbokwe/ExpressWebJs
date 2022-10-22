"use strict";

export default {
  /*
  |--------------------------------------------------------------------------
  | Application level Middleware
  |--------------------------------------------------------------------------
  |
  | The application's global HTTP middleware stack.
  | These middlewares are run during every request to your application.
  |
  */
  applicationLevelMiddleware: ["App/Http/Middleware/CheckForMaintenanceMode", "App/Http/Middleware/ConvertEmptyStringsToNull", "App/Http/Middleware/RequestBodyValidator"],

  /*
  |--------------------------------------------------------------------------
  | Route Middleware
  |--------------------------------------------------------------------------
  |
  | Route middleware is key/value object to conditionally add middleware on
  | specific routes or assigned to group of routes.
  |
  */
  routeMiddleware: {
    auth: "App/Http/Middleware/Auth",
  },
};
