type Unique<T extends unknown[], U extends unknown[] = []> = T extends [
  infer A,
  ...infer B
]
  ? Unique<Without1<B, A>, [...U, A]>
  : U;

type stringUnique = Unique<[unknown, unknown, any, any, never, never]>;
