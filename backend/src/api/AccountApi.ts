import { Application, NextFunction, Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const users = [];

export const AccountApi = (pointerApp: Application) => {
  const app: Application = pointerApp;
  const SECRET = "mykey";

  /* Formulaire de connexion */
  app.post("/login", async (req, res) => {
    // Pas d'information à traiter
    console.log(req.body);

    if (!req.body.username || !req.body.password) {
      return res
        .status(400)
        .json({ message: "Error. Please enter the correct username and password" });
    }

    // Checking
    let user = null;
    for (const u of users) {
      if (
        u.username.toLowerCase() === req.body.username.toLowerCase() &&
        (await bcrypt.compare(req.body.password, u.password))
      ) {
        user = u;
        break;
      }
    }

    // Pas bon
    if (!user) {
      return res.status(400).json({ message: "Error. Wrong login or password" });
    }

    const token = jwt.sign(
      {
        id: user.id,
        username: user.username,
      },
      SECRET,
      { expiresIn: "24 hours" }
    );

    return res.json({ access_token: token });
  });

  app.post("/register", async (req, res) => {
    // Aucune information à traiter
    if (!req.body.username || !req.body.password) {
      return res.status(400).json({ message: "Error. Please enter username and password" });
    }

    // Checking
    const userExisting = users.find(
      (u) => u.username.toLowerCase() === req.body.username.toLowerCase()
    );

    // Pas bon
    if (userExisting) {
      return res
        .status(400)
        .json({ message: `Error. User ${req.body.username.toLowerCase()} already existing` });
    }

    const hash = await bcrypt.hash(req.body.password, 10);

    // Données du nouvel utilisateur
    const id = users[users.length - 1].id + 1;
    const newUser = {
      id: id,
      username: req.body.username.toLowerCase(),
      password: hash,
    };

    // Insertion dans le tableau des utilisateurs
    users.push(newUser);
    console.log(users);

    return res.status(201).json({ message: `User ${id} created` });
  });

  app.post("/renew", (req, res) => {});
};
