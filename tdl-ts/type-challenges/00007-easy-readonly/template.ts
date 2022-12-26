type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

type AStrTuple = [string];
type RAStrTuple = Readonly<AStrTuple>;

type BStrArr = string[];
type RBStrArr = Readonly<BStrArr>;

type IsExtends<T, Y> = T extends Y ? true : false;

type AExtendsRA = IsExtends<AStrTuple, RAStrTuple>; // true ??
type RAExtendsA = IsExtends<RAStrTuple, AStrTuple>; // false

type BExtendsRB = IsExtends<BStrArr, RBStrArr>; // true ??
type RBExtendsB = IsExtends<RBStrArr, BStrArr>; // false

type CNameObj = {
  name: string;
};

type RCNameObj = Readonly<CNameObj>;

type CExtendsRC = IsExtends<CNameObj, RCNameObj>; // true
type RCExtendsC = IsExtends<RCNameObj, CNameObj>; // true
