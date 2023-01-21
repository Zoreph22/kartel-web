import { NextFunction, Request, Response } from "express";
import * as EmailValidator from "email-validator";
import { IRegisterBody } from "../account/IAccountsBody";

export default class Validators {
  public static userSignup(req: Request<{}, {}, IRegisterBody>, res: Response, next: NextFunction) {
    let body = req.body;

    if (!body.username || body.username.length < 4) {
      return res
        .status(400)
        .json("Le pseudo est inférieur a 4 caractères, ou n'a pas été saisie !");
    }

    if(!EmailValidator.validate(body.email)) {
      return res
      .status(400)
      .json("L'email est invalide !");
    }

    if (!body.password) {
      return res.status(400).json("Le mot de passe n'a pas été saisie !");
    }

    const passwordPattern = /^(.{0,5}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/;
    if (passwordPattern.test(body.password)) {
      return res
        .status(400)
        .json(
          "Mot de passe non valide, il doit contenir une lettre majuscule, un chiffre, un caractère spécial et avoir une longueur minimale de 6."
        );
    }

    next();
  }
}
