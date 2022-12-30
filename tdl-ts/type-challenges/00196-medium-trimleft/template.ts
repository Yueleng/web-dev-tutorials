// 难点：如何对string 进行 char级别的操作？
//      使用 ``

type WhiteSpace = " " | "\n" | "\t";

// type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer R}`
//   ? TrimLeft<R>
//   : `${R}`; // R cannot be used for things after `:`, because the infer failed.

type TrimLeft<S extends string> = S extends `${WhiteSpace}${infer R}`
  ? TrimLeft<R>
  : S;
