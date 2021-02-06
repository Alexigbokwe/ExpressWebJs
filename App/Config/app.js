"use strict";
const pathTo = process.env.PWD;
module.exports = {
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

  name: process.env.APP_NAME || "ExpressWebJs",

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

  env: process.env.APP_ENV || "production",

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
    endPoints: [],
  },
  /*
  |--------------------------------------------------------------------------
  | Directory Aliases
  |--------------------------------------------------------------------------
  | Create aliases of directories and register custom module paths in ExpresswebJS like a boss!
  | Aliases will be registered when the application is started. However, feel free to register 
  | as many as you wish as the aliases are "lazy" loaded so they don't hinder performance.
  | Aliases are short unique names. You are free to create your own aliases.
  |
  | For example:
  |   { "@service": pathTo + "/App/Service" }
  |
*/
  directoryAliases: {
    "@config": pathTo + "/App/Config",
    "@providers": pathTo + "/App/Providers",
    "@middleware": pathTo + "/App/Http/Middleware",
    "@controller": pathTo + "/App/Http/Controller/",
    "@model": pathTo + "/App/Model",
    "@events": pathTo + "/App/Events",
    "@listeners": pathTo + "/App/Listeners",
    "@serviceProvider": pathTo + "/App/Providers",
    "@utils": pathTo + "/App/Utils",
    "@service": pathTo + "/App/Service",
    "@repository": pathTo + "/App/Repository",
    "@request": pathTo + "/App/Http/Requests"
  },

  /*
    |--------------------------------------------------------------------------
    | Class Aliases
    |--------------------------------------------------------------------------
    |
    | This array of class aliases will be registered when this application
    | is started. However, feel free to register as many as you wish as
    | the aliases are "lazy" loaded, auto initialied so they don't hinder performance.
    | They can be used with the use function. Example: const Hash = use('Hash);
    |
    */
  aliases: {
    Hash: "@elucidate/Hash",
    FormRequest: "@elucidate/FormRequest",
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
  providers:[
    "App/Providers/AppServiceProvider",
    "App/Providers/RouteServiceProvider",
  ],
};
