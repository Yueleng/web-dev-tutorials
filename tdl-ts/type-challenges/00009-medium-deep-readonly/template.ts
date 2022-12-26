// type DeepReadonly<T> = {
//   readonly [P in keyof T]: keyof T[P] extends any[] ? DeepReadonly<T[P]> : T[P];
// };

// 难点: 如何判断 U is object? Answer: keyof U extends never
// 解法1
type DeepReadonly2<T> = {
  readonly [P in keyof T]: keyof T[P] extends never
    ? T[P]
    : DeepReadonly2<T[P]>;
};

// 解法2: 提炼type: IsObjectLiteral 专门用来判断 isObject
type IsObjectLiteral<T> = keyof T extends never ? false : true;

type DeepReadonly<T> = {
  readonly [P in keyof T]: IsObjectLiteral<T[P]> extends true
    ? DeepReadonly<T[P]>
    : T[P];
};
