import { Entity, PrimaryKey, Property } from "@mikro-orm/core";
import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
@Entity()
export class User {
  @Field(() => Int)
  @PrimaryKey()
  id!: number; // diff from Tut

  @Field(() => String)
  @Property()
  createdAt?: Date = new Date();

  @Field(() => String)
  @Property({ onUpdate: () => new Date() })
  updatedAt?: Date = new Date();

  @Field()
  @Property({ type: "text", unique: true })
  username!: string;

  // not be able to be selectable
  // @Field()
  @Property({ type: "text" })
  password!: string;
}
