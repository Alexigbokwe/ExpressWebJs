import { GrpcRequest } from "Elucidate/Support/GRPC/GrpcRequest";
import { GrpcResponse } from "Elucidate/Support/GRPC/GrpcResponse";
import { Path } from "expresswebcorets/lib/Utils/Path";
export { GrpcRequest, GrpcResponse };

export default {
  /*
  |--------------------------------------------------------------------------
  | gRPC Proto files
  |--------------------------------------------------------------------------
  | gRPC uses a contract-first approach to API development and Protocol
  | buffers (protobuf) are used as the Interface Definition Language (IDL).
  | Here you specify the path to your proto files
  |
  */
  protos: [Path("App/Protos/Todo.proto")],

  /*
  |--------------------------------------------------------------------------
  | gRPC Configuration option
  |--------------------------------------------------------------------------
  | Here you define gRPC Configuration Option
  */

  options: {
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true,
    defaults: true,
    oneofs: true,
  },
};
