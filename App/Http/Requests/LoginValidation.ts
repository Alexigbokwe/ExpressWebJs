"use strict";
import FormRequest from "Elucidate/Validator/FormRequest";

type dataType = { email: string; password: string };

class LoginValidation extends FormRequest {
  /**
   * Handle login request validation.
   * @param {*} data | e.g request body
   */
  static async validate<T>(data: any) {
    return await this.make<T>(data, {
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }
}

export { LoginValidation, dataType };
