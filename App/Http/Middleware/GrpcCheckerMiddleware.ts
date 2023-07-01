import { GrpcRequest, GrpcResponse } from "Config/Grpc";
import { log } from "console";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

export class GrpcChecker extends MiddlewareHandler {
  override async preHandle(req: GrpcRequest, res: GrpcResponse): Promise<boolean> {
    log("grpc middleware got called");
    return true;
  }
}
