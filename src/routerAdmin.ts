import express from "express";
const routerAdmin = express.Router();
import restaurantController from "./controllers/restaurant.controller";

/** Restaurant */
routerAdmin.get("/", restaurantController.goHome);
routerAdmin
  .get("/login", restaurantController.getLogin) // get pagega kirgani malumotni rendil qilsa
  .post("/login", restaurantController.processLogin); //post bironbir harakatni amalga oshiradi ,pagega kirgani malumotni o'zgartirsa bo'ladi.
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);

/** Product */
/** User */

export default routerAdmin;
