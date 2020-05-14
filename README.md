Setup

# Expressweb.js

Expresswebjs is a Node FrameWork with expressive and organised syntax.It helps Node developers set up and structure their project in an object oriented way so as to enable code reuse. ExpressWebjs takes the pain out of development by easing common tasks (Environment Setup, Code Structure, Robust routing) used in many web projects. It supports both SQL and NOSQL databases.

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

    $ npm install npm -g

###

### Yarn installation

After installing node, this project will need npm too, so just run the following command.

      $ npm install -g

---

## Installation

## Install expresswebcli globally by running the command below

    $ npm install -g expresswebcli

## Once that is done, you can now create your project with the command below

    $ expresswebcli new [PROJECT_NAME]
    $ cd PROJECT_NAME
    $ npm install

## To create your controller

    $ expresswebcli make-controller [CONTROLLER_NAME] [--r]

## To create route

    $ expresswebcli make-route [ROUTE_NAME]

## To create nosql model

    $ expresswebcli make-nosql-model [MODEL_NAME]

## To see other commands please check https://www.npmjs.com/package/expresswebcli

## Database Setup

    $ rename example.env to .env

## Features

- Robust routing
- Focus on high performance
- Super-high test coverage
- HTTP helpers (redirection, caching, etc)
- Support for both SQL and NOSQL database
- Well organised and structured.
- Highly scalable

## Running the project

    $ npm run start

# Security Vulnerabilities

If you discover a security vulnerability within Expressweb, please send an e-mail to Alex Igbokwe via chukwuemekaigbokwe80@gmail.com. All security vulnerabilities will be promptly addressed.

# License

The ExpressWebJs framework is open-sourced software licensed under the <a href="https://opensource.org/licenses/MIT">MIT license</a>.
