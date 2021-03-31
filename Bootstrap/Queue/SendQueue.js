"use strict";
class SendQueue {
  static processQueue(job, queue, connection) {
    let jobObject = { job, queue, connection };
    this.#checkDriver(jobObject);
  }

  static #checkDriver(jobObject) {
    switch (jobObject.connection.driver) {
      case "rabbitmq":
        this.#dispatchViaRabbitmq(jobObject);
        break;
      default:
        break;
    }
  }

  static #dispatchViaRabbitmq(jobObject) {
    try {
      var amqp = require('amqplib/callback_api');
      amqp.connect(
        `${jobObject.connection.host}:${jobObject.connection.port}`,function(err,connect){
           if(err) throw err;
           connect.createChannel((error1,channel)=>{
            if(error1) throw error1;
            channel.assertQueue(jobObject.queue);
            let queueMessage = JSON.stringify(jobObject.job);
            channel.sendToQueue(jobObject.queue, Buffer.from(queueMessage));
           })
        }
      );
    } catch (error) {
      throw error;
    }
  }
}

module.exports = SendQueue;