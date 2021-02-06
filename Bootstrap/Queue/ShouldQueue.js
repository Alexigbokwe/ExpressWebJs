"use strict";
const Config = require("../../App/Config/queue");
let getConnection = Symbol("getConnection");

const SendQueue = require("./SendQueue");

class ShouldQueue {
  constructor() {
    this.job = null;
    this.signature = null;
    this.connection = this[getConnection](Config.default);
    if (this.connection == null) {
      throw "Error: Wrong Queue Connection";
    } else {
      this.queue = this.connection["queue"];
    }
  }

  /**
   * Set Queue Signature
   * @param {String} name
   * @return this
   */
  queueSignature(name) {
    this.signature = name;
    return this;
  }

  /**
   * Fire a job
   * @param {*} job
   */
  dispatch(job) {
    this.job = job;
    SendQueue.processQueue(
      { data: this.job, signature: this.signature },
      this.queue,
      this.connection,
    );
    return this;
  }

  /**
   * A helper, that make it easy to only fire a job if a condition is true
   * @param {Boolean} condition
   * @param {*} job
   */
  dispatchIf(condition, job) {
    if (condition) {
      this.dispatch(job);
    }
  }

  /**
   * Set the desired connection for the job.
   * @param  string|null  $connection
   * @return this
   */
  onConnection(connection = null) {
    if (connection != null) {
      let result = this[getConnection](connection);
      if (result != null) {
        this.connection = result;
      }
    }
    return this;
  }

  /**
   * Set the desired queue for the job.
   *
   * @param  string|null  $queue
   * @return this
   */
  onQueue(queue = null) {
    if (queue != null) {
      this.queue = queue;
    }
    return this;
  }

  [getConnection](connection) {
    if (connection != null) {
      try {
        return Config.connections[connection];
      } catch (error) {
        console.log(error);
        return null;
      }
    } else {
      return null;
    }
  }
}

module.exports = ShouldQueue;
