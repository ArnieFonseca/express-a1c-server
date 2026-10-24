import { Request, Response } from "express"
import { z } from "zod"
import { HttpStatusCodes, a1c } from "../common/common"

/**
 * Schema for URL parameters.
 * Must be Positive Integer
 */
const eagParamsSchema = z.object({
  id: z.coerce.number().int().positive(),
})

/**
 * Calculate the A1C from the EAG
 */ 
export const calculateEAG = function(req: Request, res: Response) {
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
}