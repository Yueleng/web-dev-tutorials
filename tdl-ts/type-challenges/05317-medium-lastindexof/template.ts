type LastIndexOf<
  Ts extends unknown[],
  T extends unknown,
  acc extends unknown[] = [],
  temp extends number = -1
> = Ts extends [infer F, ...infer R]
  ? IfEquals<F, T> extends true
    ? // find a match, update temp
      LastIndexOf<R, T, [...acc, F], acc["length"]>
    : // did not find a match
      LastIndexOf<R, T, [...acc, F], temp>
  : temp; // Ts is empty array now

type lastIdxOfTwo = LastIndexOf<[1, 2, 3, 2, 1], 2>;
