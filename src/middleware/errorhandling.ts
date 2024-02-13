import { CustomError, InternerServerException } from '@module/customError';
import { Request, Response, NextFunction } from 'express';

export default (
  err: CustomError | Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = { message: '' };
  if (err instanceof CustomError) {
    // dealt with err:CustomError
    res.locals.status = err.status;
    result.message = err.message;
    // CustomError never occur, only declared by developer. so don't worry about direct err_message transfer.
  } else {
    // dealt with err:Error
    const serverError = new InternerServerException();
    // The reason don't use 'parameter = err.message' : must hide detailed, direct err_message
    res.locals.status = serverError.status;
    result.message = serverError.message;
  }
  res.locals.result = result;
  next();
};
