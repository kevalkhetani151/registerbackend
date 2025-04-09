import { Response } from 'express';
import { errorResponce, sucessResponce } from '../domain/entity/responce';

export function sucessResponce(
  resp: Response,
  message: string,
  data: unknown = {},
) {
  const Responce: sucessResponce = {
    status: true,
    message: message,
    data: data,
    error: [],
  };
  resp.status(201).json(Responce);
}

export function errorResponce(
  resp: Response,
  message: string,
  error: any,
  data: [],
) {
  const Responce: errorResponce = {
    status: false,
    message: message,
    error: error,
    data: data,
  };
  resp.status(201).json(Responce);
}
