type Diff<T extends object, U extends object> = Pick<
  T & U,
  Exclude<keyof T, keyof U> | Exclude<keyof U, keyof T>
>;
