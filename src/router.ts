import express from "express";
const router = express.Router();
import memberController from "./controllers/member.controller";
//import routerAdmin from "./router-admin";
//import restaurantController from "./controllers/restaurant.controller";

router.post("/login", memberController.login);
router.post("/signup", memberController.signup);

export default router;
