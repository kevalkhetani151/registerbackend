export interface sucessResponce {
  status: boolean;
  message: string;
  data: any;
  error: [];
}

export interface errorResponce {
  status: boolean;
  message: string;
  error: unknown;
  data: [];
}
