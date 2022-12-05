type MyParameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer X
) => any
  ? [...X]
  : never;

// 知识点
// 1. infer
// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#inferring-within-conditional-types
// https://github.com/Microsoft/TypeScript/pull/24897
