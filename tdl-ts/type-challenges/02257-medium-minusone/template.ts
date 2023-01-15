// U 是用来计数的元组， 从0开始，数到多少，U中就有多少个元素。
// 递增计数 没有办法通过 1000+的数字的测试用例 (TS restriction: 1000 maximum recursion)
type MinusOne1<T extends number, U extends 1[] = []> = T extends 0
  ? -1 // 处理结果为 -1 的边界情况
  : [1, ...U]["length"] extends T // U.length + 1 等于目标数字T吗？ （递归的终止条件）
  ? U["length"] // U.length === T - 1
  : MinusOne1<T, [1, ...U]>;

// 增强版本： 一次递归增加2个计数
// 没有办法通过非常大的数字：9_007_199_254_740_992, 2000+也不行
// prettier-ignore
type MinusOne2<T extends number, U extends 1[] = []> = 
  T extends 0
    ? -1
    : [1, 1, ...U]["length"] extends T
      ? [1, ...U]["length"]
      : [1, ...U]["length"] extends T
        ? U["length"]
        : MinusOne2<T, [1, 1, ...U]>;

// 继续增强: 一次递归增加999个计数
// construct an array of length L, complexity O(n)
type Tuple<L extends number, T extends 1[] = []> = T["length"] extends L
  ? T
  : Tuple<L, [...T, 1]>;

// return an array of length L, but starting from From Array and To Array
// mostly support 999 * 999 maximum. but still support 9_007_199_254_740_992
type FromToTuple<
  L extends number,
  From extends 1[] = [],
  To extends 1[] = []
> = From["length"] extends L
  ? From
  : From["length"] extends To["length"]
  ? never
  : FromToTuple<L, [1, ...From], To>;

type TupleMax = Tuple<999>;

type SuperTuple<
  L extends number,
  C extends 1[] = [],
  P extends 1[] = [] // P has array less than the length of C
> = C["length"] extends L
  ? C
  : FromToTuple<L, P, C> extends never
  ? SuperTuple<L, [...TupleMax, ...C], C>
  : FromToTuple<L, P, C>;

type Minus<A extends number, B extends number> = SuperTuple<A> extends [
  ...SuperTuple<B>,
  ...infer R extends 1[]
]
  ? R["length"]
  : never;

type MinusOne3<T extends number> = T extends 0 ? -1 : Minus<T, 1>;

// Method4: Still cannot solve the issue for 9_007_199_254_740_992
type Digital = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

// MakeDigitalArray<"7", []> -> [0, 0, 0, 0, 0, 0, 0]
type MakeDigitalArray<
  N extends Digital,
  T extends any[] = []
> = N extends `${T["length"]}` ? T : MakeDigitalArray<N, [...T, 0]>;

type Multiply10<T extends any[]> = [
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T,
  ...T
];

type ToArray<S extends number | string, T extends any[] = []> =
  // get first digital F and the rest of digits L
  `${S}` extends `${infer F}${infer L}`
    ? F extends Digital
      ? ToArray<L, [...Multiply10<T>, ...MakeDigitalArray<F>]>
      : never
    : T;

type _Minus<S extends number, N extends number> = ToArray<S> extends [
  ...ToArray<N>,
  ...infer L
]
  ? L["length"]
  : 0;

type MinusOne4<S extends number> = S extends 0 ? -1 : _Minus<S, 1>;

type NumberLiteral = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";

type MinusOneMap = {
  "0": "9";
  "1": "0";
  "2": "1";
  "3": "2";
  "4": "3";
  "5": "4";
  "6": "5";
  "7": "6";
  "8": "7";
  "9": "8";
};

// 'abcd' => 'dcba'
type ReverseString<S extends string> = S extends `${infer First}${infer Rest}`
  ? `${ReverseString<Rest>}${First}`
  : "";

// '00999' => '999'
type RemoveLeadingZeros<S extends string> = S extends "0"
  ? S
  : S extends `0${infer R}`
  ? RemoveLeadingZeros<R>
  : S;

// get the substring excluding last char
// e.g. 'abcd' => 'abc'
type Initial<T extends string> =
  ReverseString<T> extends `${infer First}${infer Rest}`
    ? ReverseString<Rest>
    : T;

// '123' => 123, i.e. Implement ParseInt
// https://devblogs.microsoft.com/typescript/announcing-typescript-4-8-beta/#improved-inference-for-infer-types-in-template-string-types
// we can use extends right after infer, to specify the type
type ParseInt<T extends string> =
  RemoveLeadingZeros<T> extends `${infer __number extends number}`
    ? __number
    : never;

type MinusOneForString<S extends string> =
  S extends `${Initial<S>}${infer Last extends NumberLiteral}`
    ? Last extends `0`
      ? `${MinusOneForString<Initial<S>>}${MinusOneMap[Last]}`
      : `${Initial<S>}${MinusOneMap[Last]}`
    : never;

type MinusOne<T extends number> = T extends 0
  ? -1
  : ParseInt<MinusOneForString<`${T}`>>;
