import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

import routes from './routes'

class App {
    public express: express.Application;

    public constructor () {
        this.express = express()

        this.middlewares()
        this.database()
        this.routes()
    }

    private middlewares (): void {
        this.express.use(express.json())
        this.express.use(cors())
    }

    private database (): void {
        mongoose.connect('mongodb://localhost:27017/truckpad', {
            useNewUrlParser: true
        })
    }

    private routes (): void {
        this.express.use(routes)
    }
}

export default new App().express
