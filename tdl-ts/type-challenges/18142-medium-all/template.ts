type All<T extends unknown[], U> = T extends [infer F, ...infer R]
  ? IfEquals<F, U> extends true
    ? All<R, U>
    : false
  : true;
