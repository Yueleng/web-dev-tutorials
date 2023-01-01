// 本题难点：如何判断 一个 char 是不是 capital
//   Answer: S extends Uppercase<S>

// 辅助type, assume first char is lower case
type _KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? F extends Uppercase<F>
    ? F extends Lowercase<F>
      ? `${F}${_KebabCase<R>}` // uppercase 和 lowercase都一样 说明不是alphabetica: a-zA-Z
      : `-${Lowercase<F>}${_KebabCase<R>}` // Uppercase一样 lowercase 不一样， 说明是 alphabetica
    : `${F}${_KebabCase<R>}` // Uppercase不一样 说明是 alphabetica
  : "";

// 我的答案
type KebabCase1<S extends string> = _KebabCase<Uncapitalize<S>>;

type foobar = KebabCase1<"foo-bar">;
type bextendsB = "b" extends "B" ? 1 : 2;

// omizha的答案: 非常巧妙！
// https://github.com/type-challenges/type-challenges/issues/20262
type KebabCase<S extends string> = S extends `${infer F}${infer R}`
  ? R extends Uncapitalize<R>
    ? `${Uncapitalize<F>}${KebabCase<R>}` // R = Uncappitalized(R): start with lowercase or non-alpha
    : `${Uncapitalize<F>}-${KebabCase<R>}`
  : "";
