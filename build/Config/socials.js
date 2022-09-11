"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Env_1 = require("expresswebcorets/lib/Env");
exports.default = {
    /*
      |--------------------------------------------------------------------------
      | Social Connection Drivers
      |--------------------------------------------------------------------------
      |
      | ExpressWebJs social API supports so many authenication services,
      | giving you the flexibility to use single sign-on using an OAuth provider such as
      | Facebook,Twitter,LinkedIn,Google, Microsoft.
      |
      | You can set up social connection drivers like so:
      | social_connections: ["facebook","twitter","linkedIn"]
      |
      */
    social_connections: ["facebook"],
    /*
      |--------------------------------------------------------------------------
      | Social connections
      |--------------------------------------------------------------------------
      |
      | Here you can configure your social connection information
      | for any of the drivers you choose.
      |
      */
    connections: {
        facebook: {
            driver: "facebook",
            clientID: (0, Env_1.env)("FACEBOOK_CLIENT_ID"),
            clientSecret: (0, Env_1.env)("FACEBOOK_CLIENT_SECRET"),
            callbackURL: "http://localhost:5000/api/facebook/secrets",
        },
        google: {
            driver: "google",
            clientID: (0, Env_1.env)("GOOGLE_CLIENT_ID"),
            clientSecret: (0, Env_1.env)("GOOGLE_CLIENT_SECRET"),
            callbackURL: "http://localhost:5000/api/auth/google/callback",
        },
        twitter: {
            driver: "twitter",
            consumerKey: (0, Env_1.env)("TWITTER_CONSUMER_KEY"),
            consumerSecret: (0, Env_1.env)("TWITTER_CONSUMER_SECRET"),
            callbackURL: "http://localhost:5000/api/auth/twitter/callback",
        },
        linkedin: {
            driver: "linkedin",
            clientID: (0, Env_1.env)("LINKEDIN_CLIENT_ID"),
            clientSecret: (0, Env_1.env)("LINKEDIN_CLIENT_SECRET"),
            callbackURL: "http://localhost:5000/api/auth/linkedin/callback",
            scope: ["r_emailaddress", "r_liteprofile"],
        },
        microsoft: {
            driver: "microsoft",
            clientID: (0, Env_1.env)("MICROSOFT_CLIENT_ID"),
            clientSecret: (0, Env_1.env)("MICROSOFT_CLIENT_SECRET"),
            callbackURL: "http://localhost:5000/api/auth/microsoft/callback",
            scope: ["user.read"],
        },
    },
};
