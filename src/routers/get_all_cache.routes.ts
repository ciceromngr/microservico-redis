import { Router } from "express";
import getAllCache from "../controllers/GetAllCache";

const getAllRouter = Router()
getAllRouter.get('/get/all/:key', getAllCache.get)

export default getAllRouter