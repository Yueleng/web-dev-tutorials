// prettier-ignore
type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T["length"],
  AC extends unknown[] = []
> = Start extends End
  ? [...AC, ...T]
  : T extends [infer F, ...infer R]
    ? Start extends 0
      ? Fill<R, N, Start, MinusOne<End>, [...AC, N]> // Start is 0
      : Fill<R, N, MinusOne<Start>, MinusOne<End>, [...AC, F]> // Start is not 0
    : AC; // T already empty now
