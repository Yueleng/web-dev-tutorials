import {
  EntityManager,
  EntityManagerType,
  IDatabaseDriver,
} from "@mikro-orm/core";
import { Request, Response } from "express";
import session from "express-session";

export type ORMContext = {
  em: IDatabaseDriver[typeof EntityManagerType] & EntityManager;
  req: Request & {
    session: session.Session &
      Partial<session.SessionData> & { userId: number };
  };
  res: Response;
};
