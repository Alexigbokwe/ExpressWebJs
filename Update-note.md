This is a list of new added codebase.

1. Auth folder with index file is been added to expresswebCore folder in node_modules.

2. ExpressWebAuth and kernel alias has been added to the alias section in expresswebCore folder in node_modules.

3. Validatorjs as been added as the core validator package for expresswebjs. Currently it is in the outer package.js but subsequently will be added in the core section.

4. Files in the authRoute in the public route folder has been modified to point to the new created Login and Registration controllers

5. Route manager is now been used in all routes, this leads to an update in the Controller index in Expresswebcore in node_modules.

6. Manager file has been added to the Route folder in Expresswebcore in node_modules.

7. Auth, LoginController and RegistrationController has been added in the Controller/Auth folder in (public).

8. Controller file has been added in the Controller folder.

9. Requests/helper folder has been added to Http folder. I will share more light on how to handle request validation.

10. Auth middleware has been added.

11. Kernel file has been added to Http folder.

12. Validator has been added in the service provider.

13. HttpError has been moved to Utils folder and utils alias has been added to App/Config/app.js file.

14. Database index has been updated to support DB_SHOULD_CONNECT=true in the env file

15. example.env file has been updated.

16. Route/index in expresswebcore has been modified

17. Container/container file in expresswebcore has been modified.

18. ConvertEmptyStringsToNull middleware has been added.

19. CheckForMaintenanceMode middleware has been added and App/Config/app.js file has been modified. @shutDown alies has been added in expresswebCore and also App/shutDown has been added in expresswebCore.

20. Route provider have been removed. It is now auto loaded.

21. Users can now creat their own service providers.

# CHANGES WE HAVE FOR THE USERS:

1. Routing: Users can now create route groupes with or without middlewares. <br>
   <code>Route.group("/user",['authMiddleware'],()=>{<br> --->//Inner routes go here<br>})</code>
   <br>Also routing middleware have been modified from.<br>
   <code>Route.get("/accounts",accountMiddleware,at("AccountController.index"))</code> signature to: <br><code>Route.get("/accounts","AccountController@index",["accountMiddleware"])</code>

2. Controller routing: controller routing have changed from
   <code>at("UserController.index")</code> signature to <code>"UserController@index"</code> signature. this helps in writing cleaner route.

3. Middleware: Creating and registering middleware is now better and cleaner to do. You can now create your Upstream and Downstream middleware flow. You can also create applicationLevelMiddleware and routeMiddleware and register them in the kernel file in Http folder.

4. We now have a unified class to handle both SQL and NoSql Authentication.

5. The following will be scaffolded once you run the make auth command:

   1. If user is using noSql, the mongoose User_model will be created. But if Sql, User_model will be created, user migration will be generated.
   2. auth folder in the Controller folder containing Auth, LoginController and RegisterController.
   3. Then Auth middleware will be created in the middleware folder.

6. "expressweb-scheduler" parkage has been added in the package.json. Also the command folder in the app root directory, with a Console directory in the App folder to help users create maker commands and also to run cron jobs

7. New command line tool MAKER has been introduced.
