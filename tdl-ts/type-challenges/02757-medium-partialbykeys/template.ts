type _Merge<T extends object> = {
  [P in keyof T]: T[P];
};

type PartialByKeys<T extends object, K extends keyof T = keyof T> = _Merge<
  Omit<T, K> & {
    [P in K]?: T[P];
  }
>;

// du123
// Exclude<keyof T, K> lose the state for readOnly...
// while Omit<T, K> keeps the state of the remaining keys
type PartialByKeys2<T extends object, K extends keyof T = keyof T> = _Merge<
  {
    [P in keyof T as P extends K ? P : never]?: T[P];
  } & {
    [P in Exclude<keyof T, K>]: T[P];
  }
>;

interface UserReadOnly {
  readonly name: string;
  readonly age: string;
  readonly address: string;
}

type partialUser = PartialByKeys<UserReadOnly, "name">;
type partialUser2 = PartialByKeys2<UserReadOnly, "name">;
