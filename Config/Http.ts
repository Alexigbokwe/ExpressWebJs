import { ProtocolConfiguration } from "Elucidate/HttpContext/Types/ProtocolConfiguration";

/*
  |--------------------------------------------------------------------------
  | Application Http Protocol Configure
  |--------------------------------------------------------------------------
  | Here you define Application HTTP Protocol Configuration. 
  |
  */
export const protocolConfiguration: ProtocolConfiguration = {
  protocol: "http",
};

/*
  |--------------------------------------------------------------------------
  | Application Platform
  |--------------------------------------------------------------------------
  | Here you define the platform to use. Either Express or Restana
  |
  */

export type { Request, Response, NextFunction } from "Elucidate/HttpContext/Platform/Express";

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

export function SuccessResponse<T>(response: { message: string; data?: T; code?: number }): ResponseType<T> {
  return {
    code: response.code ?? 200,
    message: response.message,
    status: true,
    data: response.data,
  };
}

export function ErrorResponse<T>(response: { message: string; data?: T; code?: number }): ResponseType<T> {
  return {
    code: response.code ?? 500,
    message: response.message,
    status: false,
    data: response.data,
  };
}
