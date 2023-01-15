import { Equal } from "@type-challenges/utils";
type TypeKeys<T extends object> = T[keyof T];
type MapKeyToKey<T extends object, V extends any> = {
  [P in keyof T]: Equal<T[P], V> extends true ? P : never;
};

// ? what is the difference between unkown and any?
export type PickByType<T extends object, V extends unknown> = {
  [P in TypeKeys<MapKeyToKey<T, V>>]: T[P];
};

// answers from du123, a lot easier
export type PickByType1<T extends object, V extends unknown> = {
  [P in keyof T as Equal<T[P], V> extends true ? P : never]: T[P];
};
