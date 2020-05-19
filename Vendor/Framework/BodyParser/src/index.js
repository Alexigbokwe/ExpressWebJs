"use strict";

/*
 * expressweb-body-parser 
 *
 * (c) Alex Igbokwe <chukwuemekaigbokwe80@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
const bodyParser = require("body-parser");
const defaultConfig = require("@config/bodyParser.js");

/**
 * Parse incoming request bodies in a middleware before your handlers, 
 * available under the req.body property.
 * 
 * Note As req.body's shape is based on user-controlled input
 *
 * @class BodyParser
 * @constructor
 */
class BodyParser {
  constructor() {
    this.options = defaultConfig;
    this.handle();
  }
   handle(){
      this._json();
      this._raw();
      this._form();
      this._files();
   }
   
   /*
  |--------------------------------------------------------------------------
  | JSON Parser
  |--------------------------------------------------------------------------
  |
  | Below settings are applied when the request body contains a JSON payload.
  | If you want body parser to ignore JSON payloads, then simply set `types`
  | to an empty array.
  */
   _json(){
      return serverApp.use(bodyParser.json(this.options.json));
   }

   /**
    * Raw Parser
    */
   _raw(){
      return serverApp.use(bodyParser.json(this.options.raw));
   }
   
    /**
     * Form Parser
     */
   _form(){
      return serverApp.use(bodyParser.json(this.options.form));
   }

   /**
    * Files Parser
    */
   _files(){
     return serverApp.use(bodyParser.json(this.options.files));
   }

 
}

module.exports = new BodyParser();
