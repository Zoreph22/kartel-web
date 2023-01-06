import { Application, NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { SECRET } from "../../config";

export const isAdmin = function (req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    let payload: JwtPayload = <JwtPayload>jwt.verify(token, SECRET);
    if (payload.isAdmin) {
      next();
    } else {
      return res.status(403).json("Vous n'êtes pas Admin !");
    }
  } catch (error) {
    return res.status(403).json("Vous n'êtes pas Admin !");
  }
};

export const isUser = function (req: Request, res: Response, next: NextFunction) {
  const token = req.headers.authorization.split(" ")[1];
  try {
    jwt.verify(token, SECRET);
    next();
  } catch (error) {
    return res.status(403).json("Vous devez être connecter ou votre session à expiré !");
  }
};

export const hasPerm = function (perm: "admin" | "user" | "guest") {
  if (perm == "admin") {
    return isAdmin;
  } else if (perm == "user") {
    return isUser;
  } else if (perm == "guest") {
    return function (req: Request, res: Response, next: NextFunction) {
      if (!req.headers.authorization) {
        next();
      } else {
        return res.status(403).json("Vous devez être déconnecter !");
      }
    };
  }
  else {
    throw new Error("Permission fourni inconnu !");
  }
};
