type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <T>() => T extends Y
  ? 1
  : 2
  ? true
  : false;

type OmitByType<T extends object, V extends unknown> = {
  [P in keyof T as Equal<T[P], V> extends true ? never : P]: T[P];
};
