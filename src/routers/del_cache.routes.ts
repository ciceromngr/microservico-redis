import { Router } from "express";
import DelCache from "../controllers/DelCache";

const delCacheRouter = Router()
delCacheRouter.delete('/del/:key', DelCache.delete)

export default delCacheRouter