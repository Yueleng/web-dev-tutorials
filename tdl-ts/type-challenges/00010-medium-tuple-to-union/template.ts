// stupid implementation
type TupleToUnion1<T extends any[]> = T extends [infer F, ...infer R]
  ? F | TupleToUnion1<R>
  : never;

// smart implementation
type TupleToUnion<T extends any[]> = T[number];
