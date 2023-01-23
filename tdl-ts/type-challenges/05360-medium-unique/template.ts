type Unique<T extends unknown[], U extends unknown[] = []> = T extends [
  infer A,
  ...infer B
]
  ? Unique<Without1<B, A>, [...U, A]>
  : U;

type stringUnique = Unique<[unknown, unknown, any, any, never, never]>;

// U是否存在于T中
type Includes<T extends readonly any[], U> = T extends [infer F, ...infer L]
  ? IfEquals<U, F> extends true
    ? true
    : Includes<L, U>
  : false;

// U means accumulates
type Unique1<T extends any[], U extends any[] = []> = T extends [
  infer F,
  ...infer L
]
  ? Includes<U, F> extends true
    ? [...Unique1<L, [...U]>]
    : [F, ...Unique1<L, [...U, F]>]
  : T;
