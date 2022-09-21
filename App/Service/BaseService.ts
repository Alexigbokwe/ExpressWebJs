import { AppError } from "App/Exception/AppError";
import Exception from "Elucidate/ExceptionHandler/BaseException";
import { BaseBroker } from "Elucidate/Broker";

export abstract class BaseService extends BaseBroker {
  protected getFriendlyErrorMessage = (error: unknown) => {
    if (error instanceof Error || error instanceof Exception || error instanceof AppError) {
      return error.message;
    }
    return "Error occurred";
  };
}
