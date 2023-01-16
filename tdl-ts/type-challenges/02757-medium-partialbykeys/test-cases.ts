import type { Equal, Expect } from "@type-challenges/utils";

interface User {
  name: string;
  age: number;
  address: string;
}

interface UserPartialName {
  name?: string;
  age: number;
  address: string;
}

interface UserPartialNameAndAge {
  name?: string;
  age?: number;
  address: string;
}

interface UserReadOnly {
  readonly name: string;
  readonly age: string;
  readonly address: string;
}

interface UserReadOnlyPartial {
  readonly name?: string;
  readonly age: string;
  readonly address: string;
}

type cases = [
  Expect<Equal<PartialByKeys<User, "name">, UserPartialName>>,
  Expect<Equal<PartialByKeys<User, "name" | "age">, UserPartialNameAndAge>>,
  Expect<Equal<PartialByKeys<User>, Partial<User>>>,
  Expect<Equal<PartialByKeys<UserReadOnly, "name">, UserReadOnlyPartial>>,
  // @ts-expect-error
  Expect<Equal<PartialByKeys<User, "name" | "unknown">, UserPartialName>>
];
