import { Application, NextFunction, Request, Response } from "express";
import { app } from "../app";

export abstract class Api {
  private _app: Application;

  constructor() {
    this._app = app;
    this.init();
  }

  public get app(): Application {
    return this._app;
  }

  public abstract init();
}
