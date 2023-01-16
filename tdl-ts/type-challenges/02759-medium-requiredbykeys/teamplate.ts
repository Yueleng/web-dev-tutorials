type RequiredByKeys<T extends object, K extends keyof T = keyof T> = _Merge<
  Omit<T, K> & {
    [P in K]-?: T[P];
  }
>;

interface User {
  name?: string;
  age?: number;
  address?: string;
}

type requiredUser = RequiredByKeys<User, "name">;
