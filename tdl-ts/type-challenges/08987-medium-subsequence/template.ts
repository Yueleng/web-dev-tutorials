type Subsequence<T extends unknown[]> = T extends [infer A, ...infer Rest]
  ? [A, ...Subsequence<Rest>] | Subsequence<Rest>
  : [];

type OneTwo = Subsequence<[1, 2]>;

type SubsTwo = [2] | [];
type OneUniontSubsTwo = [1, ...SubsTwo]; // [1, 2] | [1]

// 解法2: build from Bottom To Top
type Subsequence1<
  T extends unknown[],
  Prefix extends unknown[] = []
> = T extends [infer A, ...infer R]
  ? Subsequence1<R, Prefix | [...Prefix, A]>
  : Prefix;
