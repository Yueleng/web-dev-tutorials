// type PromiseAll = (
//   T: any[]
// ) => T extends [infer F, ...infer R]
//   ? [Promise(F), ...PromiseAll(R)]
//   : never;

// old answer, does not pass the last test cases
// explanation: https://github.com/type-challenges/type-challenges/issues/20949
// declare function PromiseAll<T extends readonly unknown[]>(
//   args: readonly [...T]
// ): Promise<{ [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P] }>; // ??

// // const promiseAllTest4: Promise<(number | Promise<number>)[]>
// const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);

type Resolved<E> = E extends Promise<infer R> ? R : E;

declare function PromiseAll<T extends readonly unknown[]>(
  args: readonly [...T]
): Promise<{ [P in keyof T]: Resolved<T[P]> }>;

const promiseAllTest4 = PromiseAll<Array<number | Promise<number>>>([1, 2, 3]);
