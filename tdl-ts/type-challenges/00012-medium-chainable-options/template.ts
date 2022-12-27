type Chainable<T = {}> = {
  option<K extends string, V>(
    key: K extends keyof T ? never : K,
    value: V
  ): Chainable<Omit<T, K> & { [P in K]: V }>;
  get(): T;
};

type Chainable1<P = {}> = {
  option<K extends string, T>(
    key: K extends keyof P ? never : K,
    value: T
  ): Chainable1<Omit<P, K> & { [key in K]: T }>;
  get(): P;
};

// Github 解法，
// 难点：
//  1. 不知道从何入手
//  2. 如何提示 @ts-expect-error
//  3. 如何覆盖之前的类型
type Chainable2<Result = {}> = {
  option<Key extends string, Val>(
    key: Key extends keyof Result ? never : Key,
    value: Val
  ): Chainable2<Omit<Result, Key> & { [k in Key]: Val }>;
  get(): Result;
};
