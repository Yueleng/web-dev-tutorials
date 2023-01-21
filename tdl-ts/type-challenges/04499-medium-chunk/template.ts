type Chunk<
  T extends any[],
  C extends number,
  AC extends any[][] = []
> = T["length"] extends 0
  ? AC
  : T extends [infer F, ...infer R]
  ? AC extends [...infer FS, infer Lst]
    ? Lst extends any[]
      ? FS extends any[][]
        ? Lst["length"] extends C
          ? Chunk<R, C, [...FS, Lst, [F]]> // 开启新的 array
          : Chunk<R, C, [...FS, [...Lst, F]]> // 补充旧的 array
        : never
      : never
    : Chunk<R, C, [[F]]>
  : never;

type Chunk123 = Chunk<[1, 2, 3], 1>;

// prettier-ignore
type Chunk1<
  T extends unknown[],
  N extends number,
  Saved extends unknown[] = []
> = Saved["length"] extends N
  ? [Saved, ...Chunk1<T, N>]
  : T extends [infer A, ...infer B]
    ? B extends []
      ? [[...Saved, A]]  // stop the recersion since T already is empty now
      : Chunk1<B, N, [...Saved, A]> 
    : []; // T was initially empty, return []
