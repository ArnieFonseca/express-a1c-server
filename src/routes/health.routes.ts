
import { Router } from "express"
import {checkHealth} from '../controllers/health.controllers'
import { RoutesPaths } from "../common/common";

// Instantiate Express Router
export const router = Router()

router.get(RoutesPaths.Root, checkHealth);

 

