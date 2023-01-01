// 我的答案
type Flatten1<T extends any[], P extends any[] = []> = T extends []
  ? []
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...P, ...Flatten1<F>, ...Flatten1<R>] // F is still array
    : [...P, F, ...Flatten1<R>] // F is non-array
  : never;

// 我的答案改进版本
type Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...Flatten1<F>, ...Flatten1<R>] // F is still array
    : [F, ...Flatten1<R>] // F is non-array
  : [];

// 度123 答案
type Flatten2<T extends any[]> = T extends [infer F, ...infer R]
  ? [...(F extends any[] ? Flatten2<F> : [F]), ...Flatten2<R>]
  : [];
