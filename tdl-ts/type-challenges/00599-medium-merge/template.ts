import { _Merge } from "../00527-medium-append-to-object/template";
export type Merge1<
  F extends object,
  S extends object,
  I = Diff<F, S> & S
> = Pick<I, keyof I>;

// 辅助类型 Diff
type Diff<T extends object, U extends object> = Pick<
  T,
  Exclude<keyof T, keyof U>
>;

// 多种解法
export type Merge<F, S> = _Merge<Omit<F, keyof S> & S>;
