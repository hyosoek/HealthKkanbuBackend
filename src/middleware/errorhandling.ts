import { InternerServerException } from '@module/customError';
import { Request, Response, NextFunction } from 'express';

export default (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = { message: '' };
  try {
    if (!err.message || !('status' in err)) err = new InternerServerException();
    result.message = err.message;
    res
      .status(
        'status' in err && typeof err.status === 'number' ? err.status : 500
      )
      .send(result);
  } catch (newerr) {
    // Is this try-catch necessary?
    console.log(newerr);
    res.status(500).send(result);
  }
};
