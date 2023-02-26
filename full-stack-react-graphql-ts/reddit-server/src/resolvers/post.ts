import { Post } from "../entities/Post";
import { ORMContext } from "../types";
import { Resolver, Query, Ctx, Int, Arg, Mutation } from "type-graphql";

@Resolver()
export class PostResolver {
  @Query(() => [Post])
  posts(@Ctx() { em }: ORMContext): Promise<Post[]> {
    return em.find(Post, {});
  }

  @Query(() => Post, { nullable: true })
  post(
    @Arg("id", () => Int) id: number,
    @Ctx() { em }: ORMContext
  ): Promise<Post | null> {
    return em.findOne(Post, { id });
  }

  @Mutation(() => Post)
  async createPost(
    @Arg("title") title: string,
    @Ctx() { em }: ORMContext
  ): Promise<Post> {
    const post = em.create(Post, { title });
    await em.persistAndFlush(post);
    return post;
  }

  @Mutation(() => Post, { nullable: true })
  async updatePost(
    @Arg("id") id: number,
    @Arg("title", () => String, { nullable: true }) title: string,
    @Ctx() { em }: ORMContext
  ): Promise<Post | null> {
    const post = await em.findOne(Post, { id });
    if (!post) {
      return null;
    }
    if (typeof title !== "undefined") {
      post.title = title;
    }
    return post;
  }

  @Mutation(() => Boolean)
  async deletePost(
    @Arg("id") id: number,
    @Ctx() { em }: ORMContext
  ): Promise<boolean> {
    const post = await em.findOne(Post, { id });
    if (post) {
      await em.removeAndFlush(post);
      return true;
    } else {
      return false;
    }
    // em.nativeDelete(Post, { id });
  }
}
