// prettier-ignore
type Integer<T extends number> = number extends T
  ? never
  : `${T}` extends `${string}.${string}`
    ? never
    : T;

type OnePointZero = `1.0` extends `${string}.${string}` ? never : 1.0;
type OnePointZero1 = Integer<1.0>; // 很迷，似乎会吧1.0直接转化成1
