"use strict";
const checkDriver = Symbol("checkDriver");
const dispatchViaRabbitmq = Symbol("dispatchViaRabbitmq");

class SendQueue {
  static processQueue(job, queue, connection) {
    let jobObject = { job, queue, connection };
    this[checkDriver](jobObject);
  }

  static [checkDriver](jobObject) {
    switch (jobObject.connection.driver) {
      case "rabbitmq":
        this[dispatchViaRabbitmq](jobObject);
        break;
      default:
        break;
    }
  }

  static async [dispatchViaRabbitmq](jobObject) {
    let connect = null;
    try {
      connect = require("amqplib");
    } catch (error) {
      throw error;
    }
    connect = await require("amqplib").connect(
      `${jobObject.connection.host}:${jobObject.connection.port}`,
    );
    const channel = await connect.createChannel();
    await channel.assertQueue(jobObject.queue);
    const queueMessage = JSON.stringify(jobObject.job);
    channel.sendToQueue(jobObject.queue, Buffer.from(queueMessage));
  }
}

module.exports = SendQueue;
