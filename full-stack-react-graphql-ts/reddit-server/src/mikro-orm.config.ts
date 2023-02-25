import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import path from "path";
import { Post } from "./entities/Post";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    glob: "!(*.d).{js,ts}", // how to match migration files (all .js and .ts files, but not .d.ts)
  },
  entities: [Post],
  //   entities: ["./dist/**/entities"],
  //   entitiesTs: ["./src/**/entities"],
  dbName: "reddit",
  // user: "",
  // password: "",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
