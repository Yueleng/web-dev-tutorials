// lower efficiency
type LastLowEff<T extends any[]> = T extends [infer F, ...infer R]
  ? R extends []
    ? F
    : LastLowEff<R>
  : never;

// faster
type Last<T extends any[]> = T extends [...infer ExceptLast, infer LastEle]
  ? LastEle
  : never;
