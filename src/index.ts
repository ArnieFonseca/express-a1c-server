/**
 * Load the Express Framework Objects
 */
import express from 'express'
import {RoutesPaths} from './common/common'
import {healthRouter,eagRouter} from "./routes" 
import {addTimestamp,logger} from './middlewares'
 

// Instantiate the Express Application
const app = express()

// Set default port number
const PORT = 3000

// Instructs Express to use JSON
app.use(express.json())

// Wire middleware function
app.use(addTimestamp)
app.use(logger)

// Mount Routes
app.use(RoutesPaths.Empty, healthRouter)
app.use(RoutesPaths.Health, healthRouter)
app.use(RoutesPaths.EAG, eagRouter) 

/** Start server in the  defined port number */
app.listen(PORT, () => {
    const msg:string = `Typescript Express Server is running in port ${PORT} ...`
    console.log(msg)
}) 