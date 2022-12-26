// infant implementation
// type Join<T extends string[], U extends string | number> = T extends [
//   infer First,
//   ...infer Rest
// ]
//   ? First extends string
//     ? Rest extends string[]
//       ? Rest extends []
//         ? First
//         : `${First}${U}${Join<Rest, U>}`
//       : ""
//     : never
//   : never;

type Join<T extends string[], U extends string | number> = T extends [
  infer First extends string,
  ...infer Rest extends string[]
]
  ? Rest extends []
    ? First
    : `${First}${U}${Join<Rest, U>}`
  : "";
