type IndexOf<
  Ts extends unknown[],
  T extends unknown,
  acc extends unknown[] = []
> = Ts extends [infer F, ...infer R]
  ? IfEquals<F, T> extends true
    ? acc["length"]
    : IndexOf<R, T, [...acc, F]>
  : -1; // T is empty arr []

type IndexOf1<T extends unknown[], U, Temp extends unknown[] = []> = T extends [
  infer A,
  ...infer Rest
]
  ? (U extends A ? (A extends U ? true : false) : false) extends true
    ? Temp["length"]
    : IndexOf1<Rest, U, [...Temp, A]>
  : -1;
