export interface IPayloadAction<P = any, C = never> {
  type: string;
  payload: {
    data: P;
    callback?: C;
  };
}

export interface IBaseResponse<T> {
  data: T;
  errors: any;
  isSucceeded: boolean;
}

export interface IUploadFile {
  name: string,
  url: string,
}