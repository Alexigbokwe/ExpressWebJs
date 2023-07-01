import { env } from "expresswebcorets/lib/Env";

export default {
  info: {
    title: env("APP_NAME"),
    version: "1.0",
    description: "My website API docs with ExpressWebJs, documented with Swagger",
    license: {
      name: "MIT",
      url: "https://spdx.org/licenses/MIT.html",
    },
    contact: {
      name: "",
    },
  },
  host: "127.0.0.1:5100",
  basePath: "/api",
  definition: {
    CreateTodo: {
      $name: "Go to school",
      isComplete: true,
    },
    CreateTodoSuccessResponse: {
      message: "Todo successfully created",
      data: {
        name: "Go to school",
        isComplete: true,
      },
    },
  },
};
