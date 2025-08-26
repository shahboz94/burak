import cors from "cors";
import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./router-admin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDB from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDBStore = ConnectMongoDB(session);
const store = new MongoDBStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1-ENTRANCE **/
const app = express(); //Object :Backentni hosil qilyapmiz
app.use(express.static(path.join(__dirname, "public"))); //userga public faylni ochiqlayapmiz
app.use(express.urlencoded({ extended: true })); // tradional requestlarni hendil qilish. missol uchun form tradishional request
app.use("/uploads", express.static("./uploads")); //uploads file mizni ochiqladik
app.use(express.json()); //kirib kelyotgan rest app[eypiay ] larni body qismini bizni serverimizga amalga oshiradi.yani  Express.js da JSON formatidagi HTTP so‘rovlarining body qismini avtomatik parsing qilish uchun ishlatiladi.
app.use(cors({ credentials: true, origin: true }));
app.use(cookieParser()); //Express.js dagi middleware bo‘lib, kelayotgan HTTP so‘rov (request) dagi cookie larni o‘qish va parslash uchun ishlatiladi.
app.use(morgan(MORGAN_FORMAT)); //Express.js serverida HTTP so‘rovlarini log qilish uchun ishlatiladigan middleware qo‘shish.
/** 2-SESSIONS **/

app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 6, // 10,3 soat cookesdan ochadi id
    },
    store: store,
    resave: true,
    saveUninitialized: true,
  })
);

app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});

/** 3-VIEWS **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

/** 4-ROUTERS **/

app.use("/admin", routerAdmin); //  SSR : //EJS
app.use("/", router); //Middleware Design Pattern // SPA : // REACT // 1.burak bekent serverni React loyihamizga res api[epiay] servis sifatida ishlatamiz.2 chisi Adminka  loyihamizni qurish maqsida ishlatamiz.

export default app;
