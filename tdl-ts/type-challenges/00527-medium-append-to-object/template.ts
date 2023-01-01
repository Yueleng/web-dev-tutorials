type AppendToObject1<
  T extends object,
  K extends string | number | symbol,
  V
> = T & {
  [P in K]: V;
};

type test1 = {
  key: "cat";
  value: "green";
};

// type _test1 = test1 & {
//     home: boolean;
// }
type _test1 = AppendToObject1<test1, "home", boolean>; // why not equal ??

// error : Type 'P' cannot be used to index type 'T'.
// type AppendToObject<T extends object, K extends string | number | symbol, V> = {
//   [P in keyof T | K]: P extends K ? V : T[P];
// };

// 本题难点：需要merge 重新遍历 object
// 辅助type Merge
type Merge<T extends object> = {
  [P in keyof T]: T[P];
};

type AppendToObject<
  T extends object,
  K extends string | number | symbol,
  V
> = Merge<
  T & {
    [P in K]: V;
  }
>;
