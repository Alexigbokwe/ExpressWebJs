import { HttpResponse } from "Elucidate/HttpContext";
import Exception from "Elucidate/ExceptionHandler/BaseException";
import { BaseBroker } from "Elucidate/Broker";

export abstract class BaseController extends BaseBroker {
  protected response = HttpResponse;

  protected getFriendlyErrorMessage = (error: unknown) => {
    if (error instanceof Error || error instanceof Exception) {
      return error.message;
    }
    return "Error occurred";
  };
}
