class WebSocket {
  protected io: any;

  server(ioServer: any) {
    this.io = ioServer;
  }

  channel(channelName: string) {
    this.io.emit("room", channelName);
    return this;
  }

  emit(listener: string, handler: any) {
    this.io.emit(listener, handler);
  }
}

export default new WebSocket();
