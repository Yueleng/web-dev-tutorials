type keyType<T extends object, K extends keyof T> = T extends T[K]
  ? T[K]
  : never;

interface Cat {
  type: "cat";
  breeds: "Abyssinian" | "Shorthair" | "Curl" | "Bengal";
}

interface Dog {
  type: "dog";
  breeds: "Hound" | "Brittany" | "Bulldog" | "Boxer";
  color: "brown" | "white" | "black";
}

type Animal = Cat | Dog;

type _keyType = keyType<Animal, "type">; // never ?

// 本题难点： 如何强制distributive?
//   最前面以 T extends any 开端，可以得到 强制distributive
type LookUp1<T extends { type: string }, U extends string> = T extends any
  ? T["type"] extends U
    ? T
    : never
  : never;

type _dog = LookUp1<Animal, "dog">; // Dog

// 更好的解法
type LookUp<T, U extends string> = T extends { type: U } ? T : never;
