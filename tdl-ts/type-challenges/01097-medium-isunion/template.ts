// prettier-ignore
type IsUnion1<T, P = T> = [T] extends [never]
  ? false
  : T extends any // 刻意打造分布式
    ? Exclude<P, T> extends never
      ? false
      : true
    : never;

// 多加了一步 [T] extends [never] 是为了让最后一个通过

type _neverExtendsAny = never extends any ? true : false; // true;
type excludeNever = Exclude<never, never>; // never
type neverExtendsNever = [never] extends [never] ? true : false; // true
type aaa = [Exclude<never, never>] extends [never] ? true : false; // true

// 这是个错误答案
type IsUnion2<T, P = T> = T extends any // 刻意打造分布式
  ? [Exclude<P, T>] extends [never]
    ? false
    : true
  : never;

type abc = IsUnion2<never>; // never

// 度123 答案
type IsUnion<T> = (T extends any ? (arg: T) => void : never) extends (
  arg: infer U
) => void
  ? [T] extends [U]
    ? false
    : true
  : never;

// 这是一个错误答案
type IsUnion3<T, U = T> = T extends U
  ? [U] extends [T]
    ? false
    : true
  : never;
