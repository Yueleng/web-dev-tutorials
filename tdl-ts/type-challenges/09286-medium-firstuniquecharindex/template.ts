// 非常巧妙的解法
type FirstUniqueCharIndex<
  T extends string,
  Index extends unknown[] = [],
  Pre extends string = ""
> = T extends `${infer A}${infer Rest}`
  ? `${Pre}${Rest}` extends `${infer _L}${A}${infer _R}`
    ? FirstUniqueCharIndex<Rest, [...Index, 0], `${Pre}${A}`>
    : Index["length"]
  : -1;
