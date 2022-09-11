module.exports = {
  moduleNameMapper: {
    "^App/(.*)$": "<rootDir>/App/$1",
    "^Config/(.*)$": "<rootDir>/Config/$1",
    "^Database/(.*)$": "<rootDir>/Database/$1",
    "^Routes/(.*)$": "<rootDir>/Routes/$1",
    "^Utils/(.*)$": "<rootDir>/Utils/$1",
    "^Elucidate/(.*)$": "<rootDir>/node_modules/expresswebcorets/lib/$1",
  },
  preset: "ts-jest",
  testEnvironment: "node",
};
