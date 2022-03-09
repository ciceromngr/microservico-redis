import { Router } from "express";
import SetPokemonCache from "../controllers/SetCache";

const postRouter = Router()
postRouter.post('/set/:key', SetPokemonCache.set)

export default postRouter