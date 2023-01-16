// prettier-ignore
type Shift1<T extends unknown[]> = T extends []
  ? []
  : T extends [unknown, ...infer R]
    ? R
    : never;

// one-less tenary expression
type Shift<T extends unknown[]> = T extends [unknown, ...infer R] ? R : [];
