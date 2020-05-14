"use strict";

/*
 * expressweb-cors
 *
 * (c) Alex Igbokwe <chukwuemekaigbokwe80@gmail.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

const defaultConfig = require("@config/cors.js");

/**
 * Cors class to work as a middleware and set CORS headers
 * based upon configurations saved inside `config/cors.js`
 * file.
 *
 * @namespace expressweb/Middleware/Cors
 *
 * @class Cors
 * @constructor
 */
class Cors {
  constructor() {
    this.options = defaultConfig;
  }

  /**
   * Finds if an origin is allowed in the list of
   * allowed origins
   *
   * @method _isOriginAllowed
   *
   * @param {String} origin
   * @param {Array} allowedOrigins
   *
   * @private
   */
  _isOriginAllowed(origin, allowedOrigins) {
    const originsLength = allowedOrigins.length;
    for (let i = 0; i < originsLength; i++) {
      const allowedOrigin = allowedOrigins[i];

      if (typeof allowedOrigin === "string" && origin === allowedOrigin) {
        return true;
      }

      if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
        return true;
      }
    }

    return false;
  }

  /**
   * Returns the origin to be allowed for CORS
   *
   * @method _getOrigin
   *
   * @param  {String}   origin
   *
   * @return {String}
   *
   * @private
   */
  _getOrigin(origin) {
    /**
     * Allow all
     */
    if (this.options.origin === "*") {
      return "*";
    }

    /**
     * If regex then test current origin against the regex
     */
    if (
      this.options.origin instanceof RegExp &&
      this._isOriginAllowed(origin, [this.options.origin])
    ) {
      return origin;
    }

    /**
     * If allowed origins is a string, then split the string by comma
     * and if one matches.
     */
    if (typeof this.options.origin === "string") {
      const isAllowed = this._isOriginAllowed(
        origin,
        this.options.origin.split(",")
      );
      return isAllowed ? origin : false;
    }

    /**
     * If allowed origins are defined as array then find if one
     * matches.
     */
    if (Array.isArray(this.options.origin)) {
      const isAllowed = this._isOriginAllowed(origin, this.options.origin);
      return isAllowed ? origin : false;
    }

    /**
     * If it's a function then the developer decide whether
     * to allow or not
     */
    if (typeof this.options.origin === "function") {
      return this.options.origin(origin) ? origin : false;
    }

    return this.options.origin === true;
  }

  /**
   * The list of headers to be allowed for CORS request
   *
   * @method _getHeaders
   *
   * @param  {String}    headers
   *
   * @return {String}
   *
   * @private
   */
  _getHeaders(headers) {
    const allowedHeaders =
      typeof this.options.headers === "function"
        ? this.options.headers(headers)
        : this.options.headers;

    /**
     * We allow the current headers when allowedHeaders is a boolean
     * returning true.
     */
    return allowedHeaders === true || allowedHeaders === "*"
      ? headers
      : allowedHeaders instanceof Array === true
      ? allowedHeaders.join(",")
      : allowedHeaders;
  }

  /**
   * Sets the `Access-Control-Allow-Origin` header
   *
   * @method _setOrigin
   *
   * @param  {String}   origin
   * @param  {Object} response
   *
   * @private
   */
  _setOrigin(origin, response) {
    if (!origin) {
      return this;
    }

    const allowedOrigin = this._getOrigin(origin);

    if (typeof allowedOrigin === "string" && allowedOrigin !== "*") {
      response.vary("Origin");
    }

    response.header(
      "Access-Control-Allow-Origin",
      allowedOrigin === true ? origin : allowedOrigin
    );
    return this;
  }

  /**
   * Sets `Access-Control-Allow-Credentials` header only when
   * `credentials=true` inside the config file.
   *
   * @method _setCredentials
   *
   * @param {Object} response
   *
   * @private
   */
  _setCredentials(response) {
    if (this.options.credentials === true) {
      response.header(
        "Access-Control-Allow-Credentials",
        this.options.credentials
      );
    }
    return this;
  }

  /**
   * Set `Access-Control-Expose-Headers` header only when it is
   * defined inside the config file.
   *
   * @method _setExposeHeaders
   *
   * @param  {Object}          response
   *
   * @private
   */
  _setExposeHeaders(response) {
    const exposeHeaders =
      this.options.exposeHeaders instanceof Array === true
        ? this.options.exposeHeaders.join(",")
        : this.options.exposeHeaders;

    if (typeof exposeHeaders === "string" && exposeHeaders.trim()) {
      response.header("Access-Control-Expose-Headers", exposeHeaders);
    }
    return this;
  }

  /**
   * Set `Access-Control-Allow-Methods` header only when
   * `methods` are defined in the config file.
   *
   * @method _setMethods
   *
   * @param  {Object}    response
   *
   * @private
   */
  _setMethods(response) {
    const methods =
      this.options.methods instanceof Array === true
        ? this.options.methods.join(",")
        : this.options.methods;

    if (typeof methods === "string" && methods.trim()) {
      response.header("Access-Control-Allow-Methods", methods);
    }
    return this;
  }

  /**
   * Set `Access-Control-Allow-Headers` header only when headers
   * are defined inside the config file.
   *
   * @method _setHeaders
   *
   * @param  {String}    headers
   * @param  {Object}    response
   *
   * @private
   */
  _setHeaders(headers, response) {
    const corsHeaders = this._getHeaders(headers);
    if (corsHeaders) {
      response.header("Access-Control-Allow-Headers", corsHeaders);
    }
    return this;
  }

  /**
   * Set `Access-Control-Max-Age` header only when `maxAge`
   * is defined inside the config file.
   *
   * @method _setMaxAge
   *
   * @param {Object} response
   *
   * @private
   */
  _setMaxAge(response) {
    if (this.options.maxAge) {
      response.header("Access-Control-Max-Age", this.options.maxAge);
    }
    return this;
  }

  /**
   * Handle the request and respond for OPTIONS request
   *
   * @method handle
   *
   * @param  {Object}   options.request
   * @param  {Object}   options.response
   * @param  {Function} next
   *
   * @return {void}
   */
  async handle(request, response, next) {
    this._setOrigin(request.header("origin"), response)
      ._setCredentials(response)
      ._setExposeHeaders(response);

    /**
     * If request is not for OPTIONS call next. Otherwise set
     * CORS headers.
     */
    if (request.method !== "OPTIONS") {
      await next();
      return;
    }

    this._setMethods(response)
      ._setHeaders(request.header("access-control-request-headers"), response)
      ._setMaxAge(response);

    response.header("Content-length", 0).status(204).send("");
  }
}

module.exports = Cors;
