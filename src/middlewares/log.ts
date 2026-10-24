import { Request, Response, NextFunction } from 'express';
import {timeStampToString} from '../common/common'

/**
 * Middleware to log each a end-point is accessed
 */ 
export const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${timeStampToString(req.timestamp)} ${req.method} ${req.hostname}:${req.socket.localPort}${req.originalUrl}`);
  next();
}