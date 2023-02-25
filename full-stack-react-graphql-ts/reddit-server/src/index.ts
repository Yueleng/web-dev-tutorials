import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Post } from "./entities/Post";
import mikroOrmConfig from "./mikro-orm.config";

const main = async () => {
  const orm = await MikroORM.init(mikroOrmConfig);
  await orm.getMigrator().up();
  const emFork = orm.em.fork(); // <-- create the fork

  //   const post = emFork.create(Post, { title: "My first post" });
  //   await emFork.persistAndFlush(post);
  const posts = await emFork.find(Post, {});
  console.log(posts);
};

main();
