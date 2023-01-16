// github answewrs
type FlipArguments1<T extends Function> = T extends (
  ...args: infer Args
) => infer _ReturnType
  ? (...args: Reverse<Args>) => _ReturnType
  : never;

// github answers
// general section
// ?? why here Function does not work?
// isn't Function equivalent with AnyFn?
type AnyFn = (...args: any[]) => any;
type InferFunctionArguments<T extends AnyFn> = T extends (
  ...args: infer Args
) => any
  ? Args
  : never;

type FlipArguments<
  T extends AnyFn,
  Args extends any[] = InferFunctionArguments<T>
> = (...args: Reverse<Args>) => ReturnType<T>;
