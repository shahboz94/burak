import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1-ENTRANCE **/
const app = express(); //Object :Backentni hosil qilyapmiz
//console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public"))); //userga ochiqlayapmiz
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
/** 2-SESSIONS **/

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/
//SSR : EJS
app.use("/admin", routerAdmin); //BSSR : //EJS
app.use("/", router); //Middleware Design Pattern // SPA : // REACT // 1.burak bekent serverni React loyihamizga res api[epiay] servis sifatida ishlatamiz.2 chisi Adminka  loyihamizni qurish maqsida ishlatamiz.

export default app;
