// not a complete solution
type ObjectEntries1<T extends object> = {
  [P in keyof T]-?: [P, T[P]];
}[keyof T];

interface Model {
  name: string;
  age: number;
  locations: string[] | null;
}

type ModelEntries =
  | ["name", string]
  | ["age", number]
  | ["locations", string[] | null];

type objectEntries = ObjectEntries1<Partial<Model>>; // ["name", string | undefined] | ["age", number | undefined] | ["locations", string[] | null | undefined]
type objectEntries2 = ObjectEntries1<{ key?: undefined }>;

// 牛逼啊
type ObjectEntries2<T, K extends keyof T = keyof T> = K extends K
  ? [K, T[K] extends undefined | infer Type ? Type : undefined]
  : never;

// 666
type ObjectEntries<T extends object> = {
  [key in keyof Required<T>]: [
    key,
    Required<T>[key] extends never ? T[key] : Required<T>[key]
  ];
}[keyof T];

type objectEntries3 = ObjectEntries<{ key?: undefined }>;
