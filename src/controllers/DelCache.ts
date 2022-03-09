import { Request, Response } from "express";
import Cache from "../lib/Cache";

class DelCache {

    async delete(req: Request, res: Response): Promise<Response> {
        const key = req.params.key        
        await Cache.del(key)
        return res.json('Cache clear')
    }

}

export default new DelCache()