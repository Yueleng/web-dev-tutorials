// prettier-ignore
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${L}${To}${ReplaceAll<R, From, To>}`
    : S;

// prettier-ignore
// other solution: no need to replace the L, since, the infer always matches the first
type ReplaceAll2<
  S extends string,
  From extends string,
  To extends string
> = From extends ""
  ? S
  : S extends `${infer L}${From}${infer R}`
    ? `${ReplaceAll2<L, From, To>}${To}${ReplaceAll<R, From, To>}`
    : S;
