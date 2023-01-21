// compares the first digits of T and U. If they are the same - compare rest of T and rest of U
// prettier-ignore
type GreaterThanSameDigitCount<
  T extends number | string,
  U extends number | string
> = `${T}` extends `${infer TF}${infer TR}`
  ? `${U}` extends `${infer UF}${infer UR}`
    ? TF extends UF
      ? GreaterThanSameDigitCount<TR, UR>
      : "0123456789" extends `${string}${TF}${string}${UF}${string}`
        ? false
        : true
    : true
  : false;

type DigitsToArr<S extends string> = S extends `${string}${infer R}`
  ? [0, ...DigitsToArr<R>]
  : [];

type ArrLenCompare<
  T extends any[],
  U extends any[]
> = "0123456789" extends `${string}${T["length"]}${string}${U["length"]}${string}`
  ? -1
  : "0123456789" extends `${string}${U["length"]}${string}${T["length"]}${string}`
  ? 1
  : 0;

type GreaterThan<T extends number, U extends number> = ArrLenCompare<
  DigitsToArr<`${T}`>,
  DigitsToArr<`${U}`>
> extends 0
  ? GreaterThanSameDigitCount<T, U>
  : ArrLenCompare<DigitsToArr<`${T}`>, DigitsToArr<`${U}`>> extends 1
  ? true
  : false;

// another solution, but does not support number greater than 1000
type List<N extends number, R extends any[] = []> = R["length"] extends N
  ? R
  : List<N, [...R, any]>;
type _GreaterThan<A1 extends any[] | [], A2 extends any[] | []> = A1 extends A2
  ? false
  : A1 extends []
  ? false
  : A2 extends []
  ? true
  : _GreaterThan<Pop<A1>, Pop<A2>>;
type GreaterThan1<T extends number, U extends number> = _GreaterThan<
  List<T>,
  List<U>
>;
