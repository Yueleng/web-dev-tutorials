// 递归
type StartsWith1<
  T extends string,
  U extends string
> = U extends `${infer C1}${infer R1}`
  ? T extends `${infer C2}${infer R2}`
    ? C1 extends C2 // U and T are both non-empty
      ? StartsWith<R2, R1>
      : false
    : false // U is non-empty but T is empty string,
  : true;

// answer from du123
type StartsWith<T extends string, U extends string> = T extends `${U}${string}`
  ? true
  : false;
