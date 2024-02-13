import { Request, Response, NextFunction } from 'express';
import { logger } from '@middleware/logger';

export default (req: Request, res: Response, next: NextFunction) => {
  // 1. http req logging
  // 2. http res logging
  // 3. error logging
  // 4. response send
  res
    .status('status' in res.locals ? res.locals.status : 200)
    .send(res.locals.result);
};
