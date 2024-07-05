import { Router } from "express";
const router = new Router()
import { getAllClient } from "../../controllers/clientsControllers.js";


router.get('/', getAllClient)


export default router