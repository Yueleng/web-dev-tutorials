// 非常巧妙的解法
type Combination<T extends string[], U = T[number], U1 = U> = U extends string
  ? U | `${U} ${Combination<[], Exclude<U1, U>>}`
  : never;
