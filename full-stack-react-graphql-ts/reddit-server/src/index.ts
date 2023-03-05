import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { ApolloServer } from "@apollo/server";
import { buildSchema } from "type-graphql";
import { expressMiddleware } from "@apollo/server/express4";
import cors from "cors";
import { json } from "body-parser";
import { PostResolver } from "./resolvers/post";
import { __prod__ } from "./constants";
import mikroOrmConfig from "./mikro-orm.config";
import { UserResolver } from "./resolvers/user";
import RedisStore from "connect-redis";
import { createClient } from "redis";
import session from "express-session";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const emFork = orm.em.fork(); // <-- create the fork

  const app = express();

  // Initialize client.
  let redisClient = createClient();
  redisClient.connect().catch(console.error);

  // Initialize store.
  let redisStore = new RedisStore({
    client: redisClient,
    disableTouch: true,
    prefix: "reddit-server:",
  });

  app.set("trust proxy", !__prod__);

  // Initialize sesssion storage.
  app.use(
    session({
      name: "qid",
      store: redisStore,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 30, // one month
        httpOnly: true,
        sameSite: __prod__ ? "lax" : "none", // csrf
        secure: true, // cookie only works in https
      },
      resave: false, // required: force lightweight session keep alive (touch)
      saveUninitialized: false, // recommended: only save session when data exists
      secret: "keyboard cat",
    })
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PostResolver, UserResolver],
      validate: false,
    }),
  });

  await apolloServer.start();

  app.use(
    "/graphql",
    cors<cors.CorsRequest>({
      origin: [
        "https://sandbox.embed.apollographql.com",
        "https://localhost:3000", // for later in the tutorial
      ],
      credentials: true,
    }),
    json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => ({ em: emFork, req, res }),
    })
  );

  app.get("/", (_, res) => {
    res.send("hello");
  });

  app.listen(4000, () => {
    console.log("Server started! Listening on localhost:4000");
  });
};

main();
