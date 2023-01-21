import type { Equal, Expect } from "@type-challenges/utils";

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<100, 99>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>
];

type cases1 = [
  Expect<Equal<GreaterThan1<1, 0>, true>>,
  Expect<Equal<GreaterThan1<5, 4>, true>>,
  Expect<Equal<GreaterThan1<4, 5>, false>>,
  Expect<Equal<GreaterThan1<0, 0>, false>>,
  Expect<Equal<GreaterThan1<20, 20>, false>>,
  Expect<Equal<GreaterThan1<10, 100>, false>>,
  Expect<Equal<GreaterThan1<111, 11>, true>>,
  Expect<Equal<GreaterThan1<100, 99>, true>>,
  // @ts-expect-error
  Expect<Equal<GreaterThan1<1000, 998>, true>>,
  // @ts-expect-error
  Expect<Equal<GreaterThan1<1234567891011, 1234567891010>, true>>
];
