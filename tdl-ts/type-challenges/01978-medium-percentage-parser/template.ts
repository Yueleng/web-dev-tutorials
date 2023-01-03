type PercentageParser1<
  T extends string,
  step extends "first" | "second" = "first"
> = step extends "first"
  ? T extends `${infer F}${infer R}`
    ? F extends "-" | "+"
      ? [F, ...PercentageParser1<R, "second">]
      : ["", ...PercentageParser1<T, "second">]
    : ["", "", ""] // means it's just empty string
  : step extends "second" // try second
  ? T extends `${infer F}${infer R}`
    ? F extends "%"
      ? ["", "%"] // hits the last char
      : _AppendFirstElement<F, PercentageParser1<R, "second">>
    : ["", ""] // hits empty string in the second step.
  : "never";

type _AppendFirstElement<S extends string, T extends string[]> = [
  `${S}${T[0]}`,
  T[1]
];

type _a = "" extends `${infer F}${infer R}` ? true : false; // false
type _b = "1" extends `${infer F}${infer R}` ? true : false; // true
type _c = "1" extends `${infer F}${infer R}`
  ? F extends "1"
    ? true
    : false
  : false; // true

type _d = "1" extends `${infer F}${infer R}`
  ? R extends ""
    ? true
    : false
  : false; // true

type _e = PercentageParser1<"+100">;

// a better answer from:
//   https://github.com/type-challenges/type-challenges/issues/21359
// prettier-ignore
type PercentageParser<
  A extends string,
  First = "",
  Last = ""
> = A extends `${infer R}%`
  ? PercentageParser<R, First, "%">  // 发现 百分号， 最后一个元素定下来了
  : A extends `${infer U extends "+" | "-"}${infer R}` 
    ? PercentageParser<R, U, Last> // 发现 正负号， 第一个元素定下来了
    : [First, A, Last];
