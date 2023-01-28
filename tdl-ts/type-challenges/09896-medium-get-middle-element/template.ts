type GetMiddleElement<T extends unknown[]> = T extends [
  unknown,
  infer Head,
  ...infer Tail,
  unknown
]
  ? GetMiddleElement<[Head, ...Tail]> // 必须要三个或者三个以上才是 true
  : T; // 两个或两个以下

type inferHead = [1, 2] extends [unknown, infer Head, ...infer Tail, unknown]
  ? Head
  : never; // never

type inferTail = [1, 2] extends [unknown, infer Head, ...infer Tail, unknown]
  ? Tail
  : never; // never

type inferHead1 = [1, 2, 3] extends [
  unknown,
  infer Head,
  ...infer Tail,
  unknown
]
  ? [Head]
  : never; // [2]

type inferTail1 = [1, 2, 3] extends [
  unknown,
  infer Head,
  ...infer Tail,
  unknown
]
  ? Tail
  : never; // []
