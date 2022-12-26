type ReplaceKeys<U, T, Y> = {
  [K in keyof U]: K extends T ? (K extends keyof Y ? Y[K] : never) : U[K];
};

// type NodeA = {
//   type: "A";
//   name: string;
//   flag: number;
// };

// type NodeB = {
//   type: "B";
//   id: number;
//   flag: number;
// };

// type NodeC = {
//   type: "C";
//   name: string;
//   flag: number;
// };

// type Nodes = NodeA | NodeB | NodeC;
// type key = keyof Nodes; // "flag" | "type"

type extends1 = "type1" | "type2" extends "type1" | "type2" | "type3"
  ? true
  : false; // true
type extends2 = "type1" | "type2" | "type3" extends "type1" | "type2"
  ? true
  : false; // false

type A<T> = string extends T ? "yes" : "no";
type exp = A<"1" | 2>; // "no", because (string does not extends "1")

type B<T> = { x: T } extends { x: number } ? "yes" : "no";
type exp1 = B<"1" | 2>; // "no", because ("1" | 2 does not extends string)
