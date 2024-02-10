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
    if (!err.message || !('status' in err)) err = new InternerServerException(); // if non specify Error status or Error message
    result.message = err.message;
    res
      .status(
        'status' in err && typeof err.status === 'number' ? err.status : 500 //there is no situation without err.status...but, double allocation on status?
      )
      .send(result);
  } catch (newerr) {
    // Is this try-catch necessary?
    console.log(newerr);
    res.status(500).send(result);
  }
};
