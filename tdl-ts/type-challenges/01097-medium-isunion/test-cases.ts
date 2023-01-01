import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<IsUnion1<string>, false>>,
  Expect<Equal<IsUnion1<string | number>, true>>,
  Expect<Equal<IsUnion1<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion1<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion1<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion1<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion1<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion1<string | never>, false>>,
  Expect<Equal<IsUnion1<string | unknown>, false>>,
  Expect<Equal<IsUnion1<string | any>, false>>,
  Expect<Equal<IsUnion1<string | "a">, false>>,
  Expect<Equal<IsUnion1<never>, false>>
];

type cases2 = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<"a" | "b" | "c" | "d">, true>>,
  Expect<Equal<IsUnion<undefined | null | void | "">, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | "a">, false>>,
  Expect<Equal<IsUnion<never>, false>>
];
