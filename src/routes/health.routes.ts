
import { Router, Request, Response } from "express"
import {checkHealth} from '../controllers/health.controllers'

// Instantiate Express Router
const router = Router()

router.get("/", checkHealth);

export default router

