// why we must use extends afte infer? shouldn't ths already in the
// restriction of the generic types?
type objKey = string | number | symbol;
type TupleToNestedObject1<T extends objKey[], U extends any> = T extends [
  infer F extends objKey,
  ...infer R extends objKey[]
]
  ? { [P in F]: TupleToNestedObject1<R, U> }
  : U;

// from github solution: 没有我的简洁
type TupleToNestedObject<T extends string[], U> = T extends [
  infer F extends string,
  ...infer R extends string[]
]
  ? R["length"] extends 0
    ? { [P in F]: U }
    : {
        [P in F]: TupleToNestedObject<R, U>;
      }
  : U;
