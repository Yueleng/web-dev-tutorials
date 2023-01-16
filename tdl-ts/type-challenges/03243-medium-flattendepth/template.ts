// 辅助函数 判断flatten
type isFlatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? false
    : isFlatten<R>
  : true;

type FlattenDepth1<T extends any[], depth extends number = 1> = depth extends 0
  ? T
  : isFlatten<T> extends true
  ? T
  : T extends [infer F, ...infer R]
  ? F extends any[]
    ? FlattenDepth1<[...F, ...FlattenDepth1<R>], MinusOne<depth>>
    : FlattenDepth1<[F, ...FlattenDepth1<R>], MinusOne<depth>>
  : [];

type flattenEmpty = FlattenDepth1<[]>;
type flattenTwoLevel = FlattenDepth1<[1, 2, [3, 4], [[[5]]]], 1>;

// answers from github
type _Flatten<T extends any[]> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? [...F, ..._Flatten<R>]
    : [F, ..._Flatten<R>]
  : T;

type FlattenDepth<T extends any[], Depth extends number = 1> = Depth extends 0
  ? T
  : T extends _Flatten<T>
  ? T
  : FlattenDepth<_Flatten<T>, MinusOne<Depth>>;
