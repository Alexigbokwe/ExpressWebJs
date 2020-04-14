const { InjectionMode, Lifetime } = require("awilix");
const awilix = require("awilix");

containerFunction = () => {
  const container = awilix.createContainer({
    injectionMode: awilix.InjectionMode.PROXY
  });

  container.loadModules(
    ["./App/Service/**/**/*.js", "./App/Repository/**/**/*.js"],
    {
      resolverOptions: {
        injectionMode: InjectionMode.CLASSIC,
        lifetime: Lifetime.SINGLETON,
        register: awilix.asClass
      },
      // We want to register `UserService` as `userService` -
      // by default loaded modules are registered with the
      // name of the file (minus the extension)
      formatName: "camelCase"
    }
  );

  return container;
};

module.exports = containerFunction();
