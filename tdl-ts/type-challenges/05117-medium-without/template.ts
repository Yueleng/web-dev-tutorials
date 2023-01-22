/**
 * @desc 一个辅助类型，判断X和Y是否类型相同，
 * @returns 是则返回A，否则返回B
 */
type IfEquals<X, Y, A = true, B = false> = (<T>() => T extends X
  ? 1
  : 2) extends <T>() => T extends Y ? 1 : 2
  ? A
  : B;

// 辅助函数
type InArray<T extends any, Ts extends any[]> = Ts extends [infer F, ...infer R]
  ? IfEquals<T, F> extends true
    ? true
    : InArray<T, R>
  : false;

type _Without<T extends any[], U extends any[]> = T extends [
  infer F,
  ...infer R
]
  ? InArray<F, U> extends true
    ? _Without<R, U>
    : [F, ..._Without<R, U>]
  : [];

type Without1<T extends any[], U extends any | any[]> = U extends any[]
  ? _Without<T, U>
  : _Without<T, [U]>;

// answers from github
// 妙哉
type Without<T extends unknown[], U, R extends unknown[] = []> = T extends [
  infer F,
  ...infer Rest
]
  ? F extends (U extends unknown[] ? U[number] : U)
    ? Without<Rest, U, R> // get rid of this F, since it is in U
    : Without<Rest, U, [...R, F]>
  : R;
