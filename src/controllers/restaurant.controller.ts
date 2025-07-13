import { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService();

const restaurantController: T = {};
restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("goHome ");
    res.render("home"); //send   |redirect    |render
    //send  |json  |redirect  |end  |render
  } catch (err) {
    console.error("Error, goHome:", err);
    res.redirect("/admin");
  }
};

restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("getSignup ");
    res.render("signup");
  } catch (err) {
    console.error("Error, getSignup:", err);
    res.redirect("/admin");
  }
};

restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("getLogin ");
    res.render("login");
  } catch (err) {
    console.error("Error, getLogin:", err);
    res.redirect("/admin");
  }
};

restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    //console.log("processSignup ");
    console.log("processSignup req.body:", req.body);
    const file = req.file;
    if (!file)
      //agar file bosh bolsa yoki bolmasa custom error classni beryapmiz!!!
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path.replace(/\\/g, "/");
    newMember.memberType = MemberType.RESTAURANT;
    const result = await memberService.processSignup(newMember);
    //TODO:SESSIONS AUTHENTICATION

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.error("Error, processSignup:", err);
    const message =
      err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/signup')</script>`
    );
  }
};

restaurantController.processLogin = async function (
  req: AdminRequest,
  res: Response
) {
  try {
    console.log("processLogin ");

    const input: LoginInput = req.body;
    const result = await memberService.processLogin(input);
    //TODO:SESSIONS  AUTHENTICATION

    req.session.member = result; //db session 2 [frondend] cookie.sid ga malumotni joylaydi
    req.session.save(function () {
      //tepadagi 2 ta ishni qilishini kafolatlaydigan qisim dok da shunaqa!!
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.error("Error, processLogin:", err);
    const message =
      err instanceof Error ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script> alert("${message}"); window.location.replace('admin/login')</script>`
    );
  }
};

restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    console.log("logout ");

    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.error("Error, logout:", err);
    res.redirect("/admin");
  }
};

restaurantController.getUsers = async (req: Request, res: Response) => {
  try {
    console.log("getUsers ");
    const result = await memberService.getUsers();
    console.log("result:", result);

    res.render("users", { users: result });
  } catch (err) {
    console.error("Error, getUsers:", err);
    res.redirect("/admin/login");
  }
};

restaurantController.updateChosenUser = async (req: Request, res: Response) => {
  try {
    console.log("updateChosenUser ");
    const result = await memberService.updateChosenUser(req.body);

    res.status(HttpCode.OK).json({ data: result });
  } catch (err) {
    console.error("Error, updateChosenUser:", err);
    if (err instanceof Errors) res.status(err.code).json(err);
    else res.status(Errors.standard.code).json(Errors.standard);
  }
};

restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response
) => {
  try {
    console.log("checkAuthSession ");
    if (req.session?.member)
      res.send(`<script> alert("${req.session.member.memberNick}")</script>`);
    else res.send(`<script> alert("${Message.NOT_AUTHENTICATED}")</script>`);
  } catch (err) {
    console.error("Error, checkAuthSession:", err);
    res.send(err);
  }
};
//Authorization – [o‘zor-ay-zey-shn] Kimga nima qilishga ruxsat borligini tekshirish
restaurantController.verifyRestaurant = (
  //parametr
  req: AdminRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script> alert("${message}"); window.location.replace('/admin/login'); </script>`
    );
  }
};

export default restaurantController;
//Authentication – [o‘sen-ti-fi-key-shn] login bolish
//Authorization – [o‘zor-ay-zey-shn] tamg'a olish. Authentication+Permission[ruhsat berish]  Kimga nima qilishga ruxsat borligini tekshirish
