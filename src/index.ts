/**
 * Load the Express Framework Objects
 */
import express, { Request, Response } from 'express'

import {HttpStatusCodes} from './common/common'

import apiRoutesEag from "./routes/eag.routes"


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

// Mounter EAG Routes
app.use("/", apiRoutesEag);
 

/** Start server in the  defined port number */
app.listen(PORT, () => {
    const msg:string = `Typescript Express Server is running in port ${PORT} ...`
    console.log(msg)
}) 