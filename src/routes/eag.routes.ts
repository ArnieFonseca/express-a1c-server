import { Router, Request, Response } from "express"
import {calculateEAG} from '../controllers/eag.controllers'
import { RoutesPaths } from "../common/common";

// Instantiate Express Router
export const router = Router()

/**
 * GET Calculate A1C from EAG
 */
router.get(RoutesPaths.QueryById,calculateEAG);

//export default router
