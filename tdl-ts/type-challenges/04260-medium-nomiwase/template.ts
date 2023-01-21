// type AllCombinations<S extends string> =

type _StringToUnion<S extends string> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;

type Combinations<T extends string, U = T> = U extends T
  ? U | `${U}${Combinations<Exclude<T, U>>}`
  : never;

type AllCombinations<S extends string> = Combinations<_StringToUnion<S>> | "";

type ABCombinations = AllCombinations<"AB"> | "";
