import express, { Express, NextFunction, Request, Response } from 'express'
import delCacheRouter from './src/routers/del_cache.routes'
import getAllRouter from './src/routers/get_all_cache.routes'
import postCacheRouter from './src/routers/post_cache.routes'
import cors from 'cors'

class Http {

    public server: Express

    constructor() {
        this.server = express()
        this.middlewares()
        this.routers()
        this.exceptionRouters()
    }

    middlewares() {
        this.server.use(express.json())
        this.server.use(cors())
    }

    routers() {
        this.server.use('/redis',postCacheRouter)
        this.server.use('/redis', getAllRouter)
        this.server.use('/redis', delCacheRouter)
    }

    exceptionRouters() {
        this.server.use(( err: Error, req: Request, res: Response, next: NextFunction ) => {
            if(err instanceof Error) {
                return res.status(400).json({ 
                    name: err.name || 'Error',
                    error: err.message 
                })
            }

            return res.status(500).json({
                error: 'Internal server error'
            })
        })
    }

}

export default new Http().server