import { Request, Response } from "express"
import { HttpStatusCodes } from "../common/common"

/**
 * GET: Home Route Definition
 */
export const checkHealth = (req:Request, res:Response) => {
    const responseMsg  = {message:"Express Typescript Server is OK"}
    res.status(HttpStatusCodes.OK).json(responseMsg)
 
}