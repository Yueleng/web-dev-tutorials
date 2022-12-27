type Pop<T extends any[]> = T extends [...infer ExceptLast, infer Last]
  ? ExceptLast
  : [];

// type Last<T extends any[]> = T extends [...infer ExceptLast, infer LastEle]
//   ? LastEle
//   : never;

// type aaa = Pop<[]>; // never
