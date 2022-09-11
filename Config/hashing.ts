import env from "Elucidate/Env";
export default {
  /*
    |--------------------------------------------------------------------------
    | Default Hash Driver
    |--------------------------------------------------------------------------
    |
    | This option controls the default hash driver that will be used to hash
    | passwords for your application. By default, the bcrypt algorithm is
    | used; however, you remain free to modify this option if you wish.
    |
    | Supported: "bcrypt", "argon".
    |
    */

  driver: "bcrypt",

  /*
    |--------------------------------------------------------------------------
    | Bcrypt Options
    |--------------------------------------------------------------------------
    | npm install bcrypt
    |--------------------------------------------------------------------------
    | Here you may specify the configuration options that should be used when
    | passwords are hashed using the Bcrypt algorithm. This will allow you
    | to control the amount of time it takes to hash the given password.
    |
    */

  bcrypt: {
    rounds: env("BCRYPT_ROUNDS", 10),
  },

  /*
    |--------------------------------------------------------------------------
    | Argon Options
    |--------------------------------------------------------------------------
    | npm install argon
    |--------------------------------------------------------------------------
    | Here you may specify the configuration options that should be used when
    | passwords are hashed using the Argon algorithm. These will allow you
    | to control the amount of time it takes to hash the given password.
    |
    */

  argon: {
    hashLength: 32,
    timeCost: 3,
    memory: 4096,
    parallelism: 1,
    type: "argon2i",
  },
};
