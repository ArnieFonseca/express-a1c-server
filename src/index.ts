/**
 * Load the Express Framework Objects
 */
import express from 'express'
import {RoutesPaths} from './common/common'
import routesEag from "./routes/eag.routes"
import routesHealth from "./routes/health.routes"

// Instantiate the Express Application
const app = express()

// Set default port number
const PORT = 3000

// Instructs Express to use JSON
app.use(express.json())

// Mount Routes
app.use(RoutesPaths.Empty, routesHealth)
app.use(RoutesPaths.Health, routesHealth)
app.use(RoutesPaths.EAG, routesEag)
 

/** Start server in the  defined port number */
app.listen(PORT, () => {
    const msg:string = `Typescript Express Server is running in port ${PORT} ...`
    console.log(msg)
}) 