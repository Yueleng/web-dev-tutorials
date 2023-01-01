// 非常经典
// 难点：
//  1. 利用好 分布式
//  2. exclude 用来去除 联合分布 P 中的特定分布 T. (because, T 被distribute 了)
//  3. exclude 到最后会变成 never, 见下面例子
//  4. [T] extends [never] 终止递归
// prettier-ignore
type Permutation<T, P = T> = [T] extends [never]
  ? []
  : T extends any
    ? [T, ...Permutation<Exclude<P, T>>]
    : never;

// never extends anything
type neverExtendsAny = never extends any ? 1 : 2; // 1

// nothing extends never
type anyExtendsNever = [any] extends [never] ? 1 : 2;
type stringExtendsNever = string extends never ? 1 : 2;

// exclude 到最后会变成 never
type excludeToEnd = Exclude<Exclude<"abc" | "bcd", "abc">, "bcd">; // never
