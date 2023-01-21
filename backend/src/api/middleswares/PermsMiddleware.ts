import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { daofactory } from "../../app";
import { SECRET } from "../../config";

export const isAdmin = async function (req: Request, res: Response, next: NextFunction) {
  let accounts = daofactory.createAccount();
  const token = req.headers.authorization.split(" ")[1];
  try {
    const payload: JwtPayload = <JwtPayload>jwt.decode(token);
    let account = await accounts.readAccountById(payload.id);

    if (!account) {
      throw new Error("Compte inexistant !");
    }

    jwt.verify(token, SECRET + account.password);
    if (payload.isAdmin) {
      next();
    } else {
      return res.status(403).json("Vous n'êtes pas Admin !");
    }
  } catch (error) {
    return res.status(403).json("Vous n'êtes pas Admin !");
  }
};

export const isUser = async function (req: Request, res: Response, next: NextFunction) {
  let accounts = daofactory.createAccount();
  const token = req.headers.authorization?.split(" ")[1];
  try {
    const payload: JwtPayload = <JwtPayload>jwt.decode(token);
    let account = await accounts.readAccountById(payload.id);

    if (!account) {
      throw new Error("Compte inexistant !");
    }

    jwt.verify(token, SECRET+account.password);
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
  } else {
    throw new Error("Permission fourni inconnu !");
  }
};
