import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { FirebaseService } from "@cargo54/auth";

const ipAuthorization = (req: Request, res: Response, next: NextFunction) => {
  const ipAllows: any = process.env.IPALLOWS?.split(",");

  const ip =
    (<string>req.headers["x-forwarded-for"])?.split(",").shift() ||
    req.socket?.remoteAddress;

  console.log(ipAllows);
  console.log("user is connected on ip", ip);
  if (Array.isArray(ipAllows) && ipAllows.length > 0) {
    if (ipAllows.includes("*") || ipAllows.includes(ip)) {
      next();
    } else {
      res.sendStatus(401);
    }
  } else {
    res.sendStatus(401);
  }
};

// firebase authorization token middleware
const authorization = (req: Request, res: Response, next: NextFunction) => {
  const token: string = req.headers.authorization?.split(" ")[1] || "";
  // init firebase service
  const firebaseService = new FirebaseService();

  // verify token
  if (token) {
    firebaseService.verifyIdToken(token).then((user) => {
      if (user) {
        // user has role
        req.body.user = user;
        next();
      } else {
        res.sendStatus(401);
      }
    });
  } else {
    res.sendStatus(401);
  }
};

export { ipAuthorization, authorization };
