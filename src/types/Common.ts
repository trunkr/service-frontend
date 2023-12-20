export interface ResponseDto<T> {
  code: number;
  message: string;
  payload: T;
}
