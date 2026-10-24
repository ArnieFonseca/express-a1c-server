import { Router, Request, Response } from "express"
import {calculateEAG} from '../controllers/eag.controllers'

// Instantiate Express Router
const router = Router()

/**
 * GET Calculate A1C from EAG
 */
router.get("/:id", calculateEAG);

export default router
