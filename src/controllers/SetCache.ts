import { Request, Response } from "express";
import Cache from "../lib/Cache";

class SetCache {

    async set(req: Request, res: Response): Promise<Response> {
        const key = req.params.key
        const object = req.body

        if (!req.body || !req ) {
            throw new Error('Error in request')
        }

        const cache: string[] = await Cache.get(key)

        try {

            if (!cache) {
                Cache.set(key, [object])
            } else {
                Cache.set(key, [...cache, object])
            }

        } catch (error) {
            throw new Error('Not is impossible to save in cache memory')
        }

        return res.status(201).json({
            message: 'Created object in memory cache, successful!'
        })
    }
}

export default new SetCache()