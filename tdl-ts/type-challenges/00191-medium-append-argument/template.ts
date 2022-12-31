// type AppendArgument<F extends Function, A> = F extends (
//   ...args: infer P
// ) => infer R
//   ? (...[P, A]) => R
//   : never;

// 难点： 函数类型的语法
type AppendArgument1<F extends Function, A> = F extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : never;

type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends (
  ...args: infer P
) => infer R
  ? (...args: [...P, A]) => R
  : never;
