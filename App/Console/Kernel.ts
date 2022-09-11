"use strict";
import scheduler from "expressweb-scheduler-ts";

class Kernel {
  /**
   * The Maker commands provided by your application.
   * @var array
   */
  static commands() {
    return [];
  }

  /**
   * Define the application's schedule command.
   * @return void
   */
  static schedule(): any {
    //
  }
}

export default Kernel;
