type Zip<T extends any[], U extends any[]> = T extends [
  infer TFirst,
  ...infer TRest
]
  ? U extends [infer UFirst, ...infer URest]
    ? [[TFirst, UFirst], ...Zip<TRest, URest>]
    : []
  : [];
