"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

type dataType = { username: string; email: string; password: string };

class RegisterValidation extends FormRequest {
  /**
   * Handle registration request validation.
   * @param {*} data | e.g request body
   */
  static async validate<T>(data: any) {
    return await this.make<T>(data, {
      username: "required|string|max:255",
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }
}

export { RegisterValidation, dataType };
