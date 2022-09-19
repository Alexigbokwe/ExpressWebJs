import RuntimeException from "Elucidate/ExceptionHandler/RuntimeException";

export class AppError extends RuntimeException {
  constructor(error: any, code: number) {
    super(error, code);
  }
}
