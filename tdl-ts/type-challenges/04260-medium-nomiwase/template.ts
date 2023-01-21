// type AllCombinations<S extends string> =

type _StringToUnion<S extends string> = S extends `${infer F}${infer R}`
  ? F | StringToUnion<R>
  : never;

type Combinations<T extends string, U = T> = U extends T
  ? U | `${U}${Combinations<Exclude<T, U>>}`
  : never;

type AllCombinations<S extends string> = Combinations<_StringToUnion<S>> | "";

type ABCombinations = AllCombinations<"AB"> | "";

// 这个解法非常得秒
// prettier-ignore
type AllCombinations1<
  S extends string,
  U = "",
  U1 = U
> = S extends `${infer F}${infer R}`
  ? AllCombinations1<R, U | F> // 尝试先打散
  : U extends string //  这个时候 S 已经是 空字符 "" 了， 然后使用分配律
    ? U | `${U}${AllCombinations1<"", Exclude<U1, U>>}`
    : "";
