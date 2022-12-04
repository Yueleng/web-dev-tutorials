type First1<T extends any[]> = T extends [] ? never : T[0];
type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

type First3<T extends any[]> = T[number] extends never ? never : T[0];

type First4<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

type a = [][number];
// type b = [][0] extends [][number];

// 知识点
// 1. extends 类型条件判断
// 2. 获取tuple 的length属性
// 3. extends union 判断的规则
// 4. infer的使用
