import { HttpResponse } from "Elucidate/HttpContext";
import Exception from "Elucidate/ExceptionHandler/BaseException";

export abstract class BaseController {
  protected response = HttpResponse;

  protected getFriendlyErrorMessage = (error: unknown) => {
    if (error instanceof Error || error instanceof Exception) {
      return error.message;
    }
    return "Error occurred";
  };
}
