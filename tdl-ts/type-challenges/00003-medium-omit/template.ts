// type MyOmit<T, K extends keyof T> = {
//   [P in keyof T]: P extends K ? never : T[P];
// };

// interface Todo {
//   title: string;
//   description: string;
//   completed: boolean;
// }

// type aa = MyOmit<Todo, "description">;

// 解法1: 灵性
type MyOmit1<T, K extends keyof T> = MyPick<T, MyExclude<keyof T, K>>;

// 解法2: 原生实现, 难点: as 的使用
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P];
};
