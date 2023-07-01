import { AppError } from "App/Exception/AppError";
import Exception from "Elucidate/ExceptionHandler/BaseException";

export abstract class BaseService {
  protected getFriendlyErrorMessage = (error: unknown) => {
    if (error instanceof Error || error instanceof Exception || error instanceof AppError) {
      return error.message;
    }
    return "Error occurred";
  };
}
