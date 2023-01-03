type DropChar<S extends string, C extends string> = S extends `${C}${infer R}`
  ? DropChar<R, C> // matches drop char: C
  : S extends `${infer L}${infer R}`
  ? `${L}${DropChar<R, C>}` // does not match C, but not empty
  : ""; // empty string

type EqualType<T, R> = [T] extends [R]
  ? [R] extends [T]
    ? true
    : false
  : false;

// 更简洁的答案
type DropChar2<
  S extends string,
  C extends string
> = S extends `${infer L}${infer R}`
  ? `${EqualType<L, C> extends true ? "" : L}${DropChar<R, C>}`
  : "";
