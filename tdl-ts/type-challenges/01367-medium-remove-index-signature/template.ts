type ObjKeys = string | number | symbol;
type TypeKeys<T extends object> = T[keyof T];
type IsObjGenericKey<T extends ObjKeys> = [
  TypeKeys<{
    [P in ObjKeys]: P extends T ? P : never;
  }>
] extends [never]
  ? false
  : true;

type RemoveIndexSignatureKeys<T extends object> = TypeKeys<{
  [K in keyof T]: IsObjGenericKey<K> extends true ? never : K;
}>;

// 这不是真确答案
type RemoveIndexSignature1<T extends object> = Pick<
  T,
  RemoveIndexSignatureKeys<T>
>;

type ObjKeysExtendsString = ObjKeys extends string ? true : false;
type StringExtendsObjKeys = "string" extends ObjKeys ? true : false;

type _aaa = IsObjGenericKey<0>; // false
type _bbb = IsObjGenericKey<"20">; // false
type _ccc = IsObjGenericKey<string>; // true

type Bar = {
  [key: number]: any;
  bar(): void;
  0: string;
};

type BarRemoveKeys = RemoveIndexSignatureKeys<Bar>;
type _eee = keyof Bar;
type _ddd = TypeKeys<{ 0: IsObjGenericKey<0> extends true ? never : 0 }>;

type BarRemove = RemoveIndexSignature1<Bar>;

// 度123 答案
// prettier-ignore
type RemoveIndexSignature2<T> = {
  [K in keyof T as 
    string extends K
      ? never
      : number extends K
        ? never
        : symbol extends K
          ? never 
          : K]: T[K];
};

// 改进版
type RemoveIndexSignature<T> = {
  [K in keyof T as IsObjGenericKey<K> extends true ? never : K]: T[K];
};
