import { Request, Response, NextFunction } from 'express';

/**
 * Middleware to update the extended timestamp property of the Request Object
 */ 
export function addTimestamp(req: Request, res: Response, next: NextFunction) {
  req.timestamp = new Date(Date.now())
  next();
}