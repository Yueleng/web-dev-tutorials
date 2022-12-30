type TrimRight<S extends string> = S extends `${infer F}${WhiteSpace}`
  ? TrimRight<F>
  : S;
