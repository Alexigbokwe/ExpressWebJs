import Exception from "Elucidate/ExceptionHandler/BaseException";

export class AppError extends Exception {
  message: string;
  constructor(message: string, code: number) {
    super(message, code);
    this.message = message;
  }
}
