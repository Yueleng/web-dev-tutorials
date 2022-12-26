// type MyReadonly2<T, K extends keyof T> = {
//   readonly [P in keyof MyPick<T, K>]: T[P];
//   [P in keyof MyOmit<T, K>]: T[P];
// };

// 难点1: = 的使用，默认值，没有提供参数的时候的默认值
// 难点2: & 的使用，union 两个 object
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [P in keyof MyPick<T, K>]: T[P];
} & {
  [P in keyof MyOmit<T, K>]: T[P];
};
