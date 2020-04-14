const todo = require("container").resolve("todosService");
class AnotherController {
  constructor() {
    //console.log(todo.name());
  }
  getMyName(req, res) {
    let e = todo.name();
    console.log(e);
    res.json({ name: e });
  }
}

module.exports = new AnotherController();
