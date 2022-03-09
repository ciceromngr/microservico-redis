import { Request, Response } from "express";
import Cache from "../lib/Cache";

class GetAllCache {

    async get(req: Request, res: Response): Promise<Response> {
        const key = req.params.key
        const cache = await Cache.get(key)
        if (cache) {
            return res.status(200).json(cache)
        }
        return res.status(400).json("Not exist memory cache")
    }

} 

export default new GetAllCache()