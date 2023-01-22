import type { Equal, Expect } from "@type-challenges/utils";

type cases1 = [
  Expect<Equal<Without1<[1, 2], 1>, [2]>>,
  Expect<Equal<Without1<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without1<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];

type cases = [
  Expect<Equal<Without<[1, 2], 1>, [2]>>,
  Expect<Equal<Without<[1, 2, 4, 1, 5], [1, 2]>, [4, 5]>>,
  Expect<Equal<Without<[2, 3, 2, 3, 2, 3, 2, 3], [2, 3]>, []>>
];
