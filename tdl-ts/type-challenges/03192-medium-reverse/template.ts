type Reverse1<T extends string[]> = T extends [
  infer F,
  ...infer R extends string[]
]
  ? [...Reverse1<R>, F]
  : [];

// any[] no need to extends after infer
type Reverse2<T extends any[]> = T extends [infer F, ...infer R]
  ? [...Reverse2<R>, F]
  : [];

// answers from github not as simple as mine.
type Reverse<T extends any[], Res extends any[] = []> = T extends [
  ...infer Start,
  infer L
]
  ? Reverse<Start, [...Res, L]>
  : Res;
