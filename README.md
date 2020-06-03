Setup

# Expressweb.js

Expresswebjs is a Node FrameWork with expressive and organised syntax.It helps Node developers set up and structure their project in an object oriented way so as to enable code reuse. ExpressWebjs takes the pain out of development by easing common tasks (Environment Setup, Code Structure, Robust routing) used in many web projects. It supports both SQL and NOSQL databases.

## join our community on slack

    expresswebjs.slack.com

---

## Requirements

    Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    npm install npm -g

###

### Yarn installation

After installing node, this project will need npm too, so just run the following command.

    npm install -g

---

## Installation

Expressweb CLI is a command line tool to help you install Expresswebjs.

Install it globally via npm like so:

    npm install -g expresswebcli

Make sure to add the npm system-wide node_modules/.bin directory to your \$PATH to be able to access the installed binary.

Once installed, you can use the expresswebcli new command to create fresh installations of ExpresswebJs.

For example, to create a new application called ritetech, simply:

    expresswebcli new ritetech

Once that is done,

    cd ritetech

Once you do that, you can now install all dependencies by running npm install.

    npm install

## Env Provider

When building an application, you may want different configuration based upon the environment your code is running in.

To fulfill this requirement, Expresswebjs uses the dotenv library.

Inside the root of every new Expresswebjs project, you’ll find an .env.example file.

You can create your .env file and set up you environment configuration. To do that on terminal, run:

    cp example.env .env

Expresswebjs helps you have a maintainable codebase by providing a dedicated location for storing application configuration.

ExpresswebJs uses the config directory, where all files are loaded at boot time.

You can access configuration values in the App/Config directory

## Directory Structure

The Expresswebjs directory structure may feel overwhelming at first glance since there are a handful of pre-configured directories.

Gradually you’ll understand the benefit of separating your entities into multiple directories, keeping your code maintainable and easy to search.

A standard Expresswebjs installation looks something like so:

    .
    ├── App/
        ├── Config/
        ├── Console/
        ├── Http/
        ├── Model/
        ├── Events/
        ├── Listeners/
        ├── Providers/
        ├── Repository/
        ├── Service/
    ├── Database
        ├── Migrations
        ├── Seeds
    ├── Routes
        ├── api.js
        ├── sockets.js
    ├── app.js
    ├── .env
    └── package.json

## App Directories

The app directory is the home of your application logic. Inside the app directory, you will see the config directory.

The config directory is used to define the configuration of your application. Expresswebjs ships with a number of config files.

## app/Http/Controller

The app/Http/Controller directory is used to store all your Http and WebSocket controllers. This directory is automatically created when you run:
for http controller:

    expresswebcli make-controller [CONTROLLER_NAME] [--r]

for websocket controller:

    expresswebcli make-ws-controller [CONTROLLER_NAME]

## app/Events

The app/Events directory is used to store all event. This directory is automatically created when you run

    expresswebcli make-event [EVENT_NAME]

## app/Listeners

The app/Listeners directory is used to store all event listeners. This directory is automatically created when you run

    expresswebcli make-listener [LISTENER_NAME]

## app/Model

The app/Model directory is used to store all your models. This directory is automatically created when you run

    expresswebcli make-nosql-model [MODEL_NAME]

Other Commands are:

## To create new route folder

    expresswebcli make-route [ROUTE_NAME] [ROUTE_PATH]

## To create authentication

    expresswebcli make-nosql-auth

## To create nosql model

    expresswebcli make-nosql-model [MODEL_NAME]

## Routing

Routes enable the outside world to interact with your app via URLs.

Routes are registered inside the Routes directory file.

## Basic Routing

The most basic route binding requires a URL and a closure:

    Route.get('/', () => 'Hello ExpresswebJs')

The return value of the closure will be sent back to the client as a response.

You can also bind a route to a controller using a controller@method signature:

    Route.get('users', at('UserController.index'))

The above signature UserController.index refers to the App/Http/Controller/UserController.js file index method.

## WebSocket

ExpressWebJS offers a robust WebSocket Provider to serve real-time apps.

The server works on pure WebSocket connections (supported by all major browsers) and scales naturally within a cluster of Node.js processes.

## Basic Example

Let’s build a single room chat server for user messaging.

    expresswebcli make-ws-controller chatController

This will generate our chatController class inside App/Http/Controller/Ws
Our chatController class looks like this:

        "use strict";
        const WsBaseController = require("@WsBaseController");

        class chatController extends WsBaseController {
        constructor(socket) {
            super(socket);
        }

        onMessage(data) {
            // same as: socket.on('message')
            console.log(data);
        }

        onClose() {
            // same as: socket.on('close')
        }

        onError() {
            // same as: socket.on('error')
        }
        }

        module.exports = chatController;

## Event Methods

    class ChatController {
        onMessage () {
            // same as: socket.on('message')
        }

        onClose () {
            // same as: socket.on('close')
        }

        onError () {
            // same as: socket.on('error')
        }
    }

Note: Event methods must be prefixed with the on keyword.

To keep things simple we won’t store user messages, just deliver them.
Open the Routes/sockets.js file and paste the following code:

    const Ws = require("@socket.io");

    Ws.channel("chat", "chatController");

We can also bind a closure to the Ws.channel method, but having a dedicated controller is the recommended practice.

## Client Code

Let’s switch from server to client and subscribe to the chat channel.

     <!DOCTYPE html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Socket.io test</title>
    </head>
    <body>
        <script src="http://localhost:5000/socket.io/socket.io.js"></script>
        <script>
        const socket = io.connect("http://localhost:5000/", {
            path: "/expressweb-ws",
        });
        socket.to('chat').emit("message", [{ name: "Welcome to my Chat room" }]);
        socket.on("message", (data) => {
            console.log(data);
        });
        </script>
    </body>
    </html>

## ExpressWebJS Features

- Robust routing
- Focus on high performance
- Super-high test coverage
- HTTP helpers (redirection, caching, etc)
- Support for both SQL and NOSQL database
- Well organised and structured.
- Supports websocket
- Highly scalable

## Running the project

    npm run start

# Security Vulnerabilities

If you discover a security vulnerability within Expressweb, please send an e-mail to Alex Igbokwe via chukwuemekaigbokwe80@gmail.com. All security vulnerabilities will be promptly addressed.

# License

The ExpressWebJs framework is open-sourced software licensed under the <a href="https://opensource.org/licenses/MIT">MIT license</a>.
