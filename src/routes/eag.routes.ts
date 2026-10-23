import { Router, Request, Response } from "express"
import { z } from "zod"
import { HttpStatusCodes } from "../common/common"

// Instantiate Express Router
const router = Router()

/**
 * Schema for URL parameters.
 * Must be Positive Integer
 */
const eagParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
})

/**
 * Calculate A1C from EAG
 */
const a1c = (eAG:number) => {

  // Constants for calculation
  const OFFSET_FACTOR = 46.7
  const DIVISION_FACTOR = 28.7
  const ONE_DECIMAL_PLACE = 1

  return Number(
    ((eAG + OFFSET_FACTOR) / DIVISION_FACTOR).toFixed(ONE_DECIMAL_PLACE),
  )
}

/**
 * GET eag route to calculate the A1C
 */
router.get("/eag/:id", (req: Request, res: Response) => {
  // Try to convert param to number
  const result = eagParamsSchema.safeParse(req.params)

  if (!result.success) {
    return res.status(HttpStatusCodes.BadRequest).json({
      error: "Invalid route parameter, must be Positive Integer",
      details: result.error.issues,
    })
  }

  // Extract the Positive Integer Value
  const eAG = result.data.id

  // Construct replay message
  const replay = { result: { eag: eAG, a1c: a1c(eAG) } }

  // Send back replay
  res.status(HttpStatusCodes.OK).json(replay)
})

export default router
