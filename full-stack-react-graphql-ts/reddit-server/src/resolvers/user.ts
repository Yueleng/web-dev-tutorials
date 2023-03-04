import { User } from "../entities/User";
import { ORMContext } from "../types";
import {
  Resolver,
  // Query,
  Ctx,
  // Int,
  Arg,
  Mutation,
  InputType,
  Field,
  ObjectType,
} from "type-graphql";
import argon2 from "argon2";

@InputType()
class UsernamePasswordInput {
  @Field()
  username: string;
  @Field()
  password: string;
}

@ObjectType()
class FieldError {
  @Field()
  field: string;
  @Field()
  message: string;
}

@ObjectType()
class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User;

  @Field(() => [FieldError], { nullable: true })
  errors?: [FieldError];
}

// @ObjectType()
// class UserResponseError {}

@Resolver()
export class UserResolver {
  @Mutation(() => UserResponse)
  async register(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: ORMContext
  ): Promise<UserResponse> {
    const { username, password } = options;

    if (username.length <= 2) {
      return {
        errors: [
          { field: "username", message: "length must be greater than 2" },
        ],
      };
    }

    if (password.length <= 3) {
      return {
        errors: [
          { field: "password", message: "length must be greater thatn 3" },
        ],
      };
    }

    const hashedPassword = await argon2.hash(password);
    const user = em.create(User, { username, password: hashedPassword });
    try {
      await em.persistAndFlush(user);
    } catch (err) {
      if (
        err.code === "23505" &&
        err.message.includes(
          "duplicate key value violates unique constraint"
        ) &&
        err.detail.includes("already exists")
      ) {
        return {
          errors: [
            {
              field: "username",
              message:
                "username already exists, registration failed, please find a new user name",
            },
          ],
        };
      }
    }

    return { user };
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("options") options: UsernamePasswordInput,
    @Ctx() { em }: ORMContext
  ): Promise<UserResponse> {
    const user = await em.findOne(User, { username: options.username });
    if (!user) {
      return {
        errors: [
          {
            field: "username",
            message: "that user name does not exist",
          },
        ],
      };
    }
    const valid = await argon2.verify(user.password, options.password);
    if (!valid) {
      return {
        errors: [{ field: "password", message: "incorrect password" }],
      };
    }

    return { user };
  }

  //   @Query(() => [User])
  //   users(@Ctx() { em }: ORMContext): Promise<User[]> {
  //     return em.find(User, {});
  //   }

  //   @Query(() => Post, { nullable: true })
  //   post(
  //     @Arg("id", () => Int) id: number,
  //     @Ctx() { em }: ORMContext
  //   ): Promise<Post | null> {
  //     return em.findOne(Post, { id });
  //   }

  //   @Mutation(() => Post)
  //   async createPost(
  //     @Arg("title") title: string,
  //     @Ctx() { em }: ORMContext
  //   ): Promise<Post> {
  //     const post = em.create(Post, { title });
  //     await em.persistAndFlush(post);
  //     return post;
  //   }

  //   @Mutation(() => Post, { nullable: true })
  //   async updatePost(
  //     @Arg("id") id: number,
  //     @Arg("title", () => String, { nullable: true }) title: string,
  //     @Ctx() { em }: ORMContext
  //   ): Promise<Post | null> {
  //     const post = await em.findOne(Post, { id });
  //     if (!post) {
  //       return null;
  //     }
  //     if (typeof title !== "undefined") {
  //       post.title = title;
  //     }
  //     return post;
  //   }

  //   @Mutation(() => Boolean)
  //   async deletePost(
  //     @Arg("id") id: number,
  //     @Ctx() { em }: ORMContext
  //   ): Promise<boolean> {
  //     const post = await em.findOne(Post, { id });
  //     if (post) {
  //       await em.removeAndFlush(post);
  //       return true;
  //     } else {
  //       return false;
  //     }
  //     // em.nativeDelete(Post, { id });
  //   }
}
