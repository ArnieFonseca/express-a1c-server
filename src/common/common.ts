/**
 * HTTP Status Codes 
 */ 
export enum HttpStatusCodes {
  OK = 200,
  BadRequest = 400,
}

/**
 * Calculate A1C from EAG
 */
export const a1c = (eAG:number) => {

  // Constants for calculation
  const OFFSET_FACTOR = 46.7
  const DIVISION_FACTOR = 28.7
  const ONE_DECIMAL_PLACE = 1

  return Number(
    ((eAG + OFFSET_FACTOR) / DIVISION_FACTOR).toFixed(ONE_DECIMAL_PLACE),
  )
}