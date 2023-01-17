// 巧用 as
type Flip<T extends { [key: PropertyKey]: any }> = {
  [key in keyof T as T[key] extends PropertyKey ? T[key] : `${T[key]}`]: key;
};
