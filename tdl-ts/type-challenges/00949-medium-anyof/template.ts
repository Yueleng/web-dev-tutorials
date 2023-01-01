type Falsy = 0 | false | undefined | null | [] | "";

// prettier-ignore
type AnyOf1<T extends any[]> = T extends [infer L, ...infer R]
  ? L extends Falsy
    ? AnyOf1<R> // if falsy check rest
    : IsEmptyObj<L> extends true // also need to check {}
      ? AnyOf1<R> // if {} check rest
      : true // if not falsy and not {}, return true
  : false; // end of the recursion

// 辅助类型
type IsEmptyObj<T> = {} extends T ? true : false;

type Obj = { name: "test" } extends {} ? 1 : 2; // 1
type Obj2 = {} extends { name: "test" } ? 1 : 2; // 2

// 度123 答案
type FalseUnion =
  | false
  | ""
  | 0
  | Record<string | number | symbol, never>
  | []
  | null
  | undefined;
type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Reset]
  ? First extends FalseUnion
    ? AnyOf<Reset>
    : true
  : false;

type _A = { name: string } extends {} ? true : false; // true
type C = { name: string } extends Record<string | number | symbol, never>
  ? true
  : false; // false

type D = {} extends Record<string | number | symbol, never> ? true : false; // true
