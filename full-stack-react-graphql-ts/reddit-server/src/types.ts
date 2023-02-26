import {
  EntityManager,
  EntityManagerType,
  IDatabaseDriver,
} from "@mikro-orm/core";

export type ORMContext = {
  em: IDatabaseDriver[typeof EntityManagerType] & EntityManager;
};
