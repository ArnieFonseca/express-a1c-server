/**
 * Load the Express Framework Objects
 */
import express, { Request, Response } from 'express';

// Instantiate the Express Application
const app = express()

// Set default port number
const PORT = 3000

// HTTP Codes
const HTTP_OK = 200

// Instructs Express to use JSON
app.use(express.json())


/**
 * GET: Home Route Definition
 */
app.get("/", (req:Request, res:Response) => {
    const responseMsg  = {message:"Typescript Server using JSON"}
    res.status(HTTP_OK).json(responseMsg)
})

/**
 * GET: Route Definition EAG -> A1C
 */
app.get("/eag/:id", (req:Request, res:Response) => {
    const eAG = Number(req.params.id)
    const a1c = (eAG + 46.7 )/ 28.7
    const replay = {result:{eag:eAG, a1c:a1c.toFixed(1)}}
    res.status(HTTP_OK).json(replay)
})

/** Start server in the  defined port number */
app.listen(PORT, () => {
    const msg:string = `Typescript Express Server is running in port ${PORT} ...`
    console.log(msg)
}) 