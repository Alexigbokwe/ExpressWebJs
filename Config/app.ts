"use strict";
import env from "expresswebcorets/lib/Env";
export default {
  /*
    |--------------------------------------------------------------------------
    | Application Name
    |--------------------------------------------------------------------------
    |
    | This value is the name of your application. This value is used when the
    | framework needs to place the application's name in a notification or
    | any other location as required by the application or its packages.
    |
    */

  name: env("APP_NAME", "ExpressWebJs"),

  /*
    |--------------------------------------------------------------------------
    | Application Environment
    |--------------------------------------------------------------------------
    |
    | This value determines the "environment" your application is currently
    | running in. This may determine how you prefer to configure various
    | services the application utilizes. Set this in your ".env" file.
    |
    */

  env: env("APP_ENV", "production"),

  /*
    |--------------------------------------------------------------------------
    | Application Route Prefix
    |--------------------------------------------------------------------------
    |
    | Define your route prefix binding. Default base route prefix is 'api'
    | This will run your project with '/api'. Example: http://127.0.0.1:5100/api
    |
    */

  routePrefix: env("ROUTE_PREFIX", "api"),

  /*
    |--------------------------------------------------------------------------
    | Application Timezone
    |--------------------------------------------------------------------------
    |
    | Here you may specify the default timezone for your application, which
    | will be used by the Javascript date and date-time functions. We have gone
    | ahead and set this to a sensible default for you out of the box.
    |
    */

  timezone: "Africa/Lagos",

  /*
  |--------------------------------------------------------------------------
  | Application maintenance mode
  |--------------------------------------------------------------------------
  | Mode ==> Determine if application is in maintenance mode or not. Default value is false
  | Message ==> The message to render while in maintenance mode.
  | Retry ==> The number of seconds after which the request may be retried
  | Endpoints ==> The endPoints that should be reachable while maintenance mode is enabled.
  |            endpoints example: ['api/users','api/accounts']
  |
*/
  maintenanceMode: {
    mode: false,
    message: "Application is in maintenance mode.",
    retry: 50,
    endPoints: ["/api/details/3"],
  },

  /*
    |--------------------------------------------------------------------------
    | Autoloaded Service Providers
    |--------------------------------------------------------------------------
    |
    | The service providers listed here will be automatically loaded on the
    | request to your application. Feel free to add your own services to
    | this array to grant expanded functionality to your applications.
    |
    */

  providers: [
    /*
     * ExpressWebJS Framework Service Providers...
     */
    "Elucidate/Route/RouteConfigServiceProvider::class",
    "Elucidate/Database/DatabaseServiceProvider::class",
    /*
     * Application Service Providers...
     */
    "App/Providers/AppServiceProvider::class",
    "App/Providers/RouteServiceProvider::class",
    "App/Providers/ShutDownProvider::class",
    //"App/Providers/SocketServiceProvider::class",
  ],

  /*
    |--------------------------------------------------------------------------
    | Static Directories
    |--------------------------------------------------------------------------
    |
    | Here you may specify the static directories that will be copied to build 
    | folder during build process.
    |
    */

  static_directories: [
    { source: "Logs", destination: "build/Logs" },
    { source: "Resources", destination: "build/Resources" },
  ],
};
