import type { Equal, Expect } from "@type-challenges/utils";

type cases2 = [
  // @ts-expect-error
  Expect<Equal<DropChar2<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar2<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar2<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar2<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar2<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<
    Equal<DropChar2<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">
  >,
  Expect<Equal<DropChar2<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];

type cases = [
  // @ts-expect-error
  Expect<Equal<DropChar<"butter fly!", "">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", " ">, "butterfly!">>,
  Expect<Equal<DropChar<"butter fly!", "!">, "butter fly">>,
  Expect<Equal<DropChar<"    butter fly!        ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", " ">, "butterfly!">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "b">, "  u t t e r f l y ! ">>,
  Expect<Equal<DropChar<" b u t t e r f l y ! ", "t">, " b u   e r f l y ! ">>
];
