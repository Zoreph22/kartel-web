import { celebrate, Joi } from "celebrate";
import { PASSWORD_PATTERN } from "../../config";

export default class Validators {
  public static userSignup() {
    return celebrate({
      body: Joi.object().keys({
        username: Joi.string().min(4).required(),
        email: Joi.string().email({ minDomainSegments: 2 }).required(),
        password: Joi.string().pattern(PASSWORD_PATTERN, { invert: true }).required(),
      }),
    });
  }

  public static userUpdateAccount() {
    return celebrate({
      body: Joi.object().keys({
        username: Joi.string().min(4),
        email: Joi.string().email({ minDomainSegments: 2 }),
        password: Joi.string().pattern(PASSWORD_PATTERN, { invert: true }),
      }),
    });
  }
}
