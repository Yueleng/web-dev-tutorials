type PrimitiveType = string | number | boolean;

type ValueToType<
  T extends PrimitiveType,
  U1 = PrimitiveType
> = U1 extends PrimitiveType
  ? T extends U1
    ? U1 extends boolean // 简直了！ boolean = true | false
      ? boolean
      : U1
    : never
  : never;

type ValueArrayToType<T extends PrimitiveType[]> = T extends [
  infer F,
  ...infer R
]
  ? F extends PrimitiveType
    ? R extends PrimitiveType[]
      ? [ValueToType<F>, ...ValueArrayToType<R>]
      : [] // never happened
    : [] // never happened
  : [];

// test
type string11ToType = ValueToType<`11`>;
type number11ToType = ValueToType<11>;
type booleanFalseToType = ValueToType<false>;
type booleanTrueToType = ValueToType<true>;

type ToPrimitive<T extends object> = {
  [P in keyof T]: T[P] extends PrimitiveType
    ? ValueToType<T[P]>
    : T[P] extends PrimitiveType[]
    ? ValueArrayToType<T[P]>
    : T[P] extends object
    ? ToPrimitive<T[P]>
    : never;
};

// test
type PersonInfoToPrimitive = ToPrimitive<{
  name: "Tom";
  age: 30;
  married: false;
  addr: {
    home: "123456";
    phone: "13111111111";
  };
  hobbies: ["sing", "dance"];
}>;

// 妙哉的解答
type ToPrimitive1<T> = T extends object
  ? {
      [K in keyof T]: ToPrimitive1<T[K]>;
    }
  : T extends { valueOf(): infer R }
  ? R
  : T;
