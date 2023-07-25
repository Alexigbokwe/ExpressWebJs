/*
  |--------------------------------------------------------------------------
  | Application Http Type
  |--------------------------------------------------------------------------
  | Here you define your data response type
  |
  */

export { Request, Response, NextFunction } from "Elucidate/HttpContext/Platform/Express";

/*
  |--------------------------------------------------------------------------
  | Application Http Response Object Type
  |--------------------------------------------------------------------------
  | Here you define your data response type
  |
  */

export type ResponseType<T> = {
  code: number;
  message: string;
  status?: boolean;
  data?: T;
};
