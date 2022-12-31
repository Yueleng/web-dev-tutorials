// 思路： 把 string 变成 char[], 然后用 array['length'] 方法
// P 这里的作用是 递归的时候有个存放的变量， tail-recursive
type LengthOfString<
  S extends string,
  P extends any[] = []
> = S extends `${infer F}${infer R}`
  ? LengthOfString<R, [...P, F]>
  : P["length"];
