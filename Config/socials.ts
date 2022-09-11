"use strict";
import env from "expresswebcorets/lib/Env";

export default {
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

  social_connections: ["facebook"], // ["facebook","twitter","linkedIn"]

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
      clientID: env("FACEBOOK_CLIENT_ID"),
      clientSecret: env("FACEBOOK_CLIENT_SECRET"),
      callbackURL: "http://localhost:5000/api/facebook/secrets",
    },
    google: {
      driver: "google",
      clientID: env("GOOGLE_CLIENT_ID"),
      clientSecret: env("GOOGLE_CLIENT_SECRET"),
      callbackURL: "http://localhost:5000/api/auth/google/callback",
    },
    twitter: {
      driver: "twitter",
      consumerKey: env("TWITTER_CONSUMER_KEY"),
      consumerSecret: env("TWITTER_CONSUMER_SECRET"),
      callbackURL: "http://localhost:5000/api/auth/twitter/callback",
    },
    linkedin: {
      driver: "linkedin",
      clientID: env("LINKEDIN_CLIENT_ID"),
      clientSecret: env("LINKEDIN_CLIENT_SECRET"),
      callbackURL: "http://localhost:5000/api/auth/linkedin/callback",
      scope: ["r_emailaddress", "r_liteprofile"],
    },
    microsoft: {
      driver: "microsoft",
      clientID: env("MICROSOFT_CLIENT_ID"),
      clientSecret: env("MICROSOFT_CLIENT_SECRET"),
      callbackURL: "http://localhost:5000/api/auth/microsoft/callback",
      scope: ["user.read"],
    },
  },
};
