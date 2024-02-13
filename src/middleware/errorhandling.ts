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
    res.locals.status = err.status;
    result.message = err.message;
  } else {
    const serverError = new InternerServerException(err.message);
    res.locals.status = serverError.status;
    result.message = serverError.message;
  }
  res.locals.result = result;
  next();
};
