/**
 * Load the Express Framework Objects
 */
import express, { Request, Response } from 'express';

import {HttpStatusCodes} from './common/common'

// Instantiate the Express Application
const app = express()

// Set default port number
const PORT = 3000

// Instructs Express to use JSON
app.use(express.json())


/**
 * GET: Home Route Definition
 */
app.get("/", (req:Request, res:Response) => {
    const responseMsg  = {message:"Typescript Server using JSON"}
    res.status(HttpStatusCodes.OK).json(responseMsg)
})

/**
 * GET: Route Definition EAG -> A1C
 */
app.get("/eag/:id", (req:Request, res:Response) => {
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

/** Start server in the  defined port number */
app.listen(PORT, () => {
    const msg:string = `Typescript Express Server is running in port ${PORT} ...`
    console.log(msg)
}) 