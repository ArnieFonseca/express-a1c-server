import { Router, Request, Response } from "express";
import {HttpStatusCodes} from '../common/common'

// Instantiate Express Router
const router = Router();

/**
 * GET eag route to calculate the A1C
 */
router.get("/eag/:id", (req:Request, res:Response) => {
    // Convert param to number
    const eAG = Number(req.params.id)

    // Constants for calculation
    const OFFSET_FACTOR = 46.7
    const DIVISION_FACTOR = 28.7
    const ONE_DECIMAL_PLACE = 1

    // Calculate A1C = (eAG + 46.7) / 28.7
    const a1c = Number(((eAG + OFFSET_FACTOR )/ DIVISION_FACTOR).toFixed(ONE_DECIMAL_PLACE))

    // Construct replay message
    const replay = {result:{eag:eAG, a1c:a1c}}

    // Send back replay
    res.status(HttpStatusCodes.OK).json(replay)
}) 

export default router;