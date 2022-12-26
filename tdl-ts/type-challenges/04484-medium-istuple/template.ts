type IsTuple<T> = [T] extends [never] // T extends never does not work here.
  ? false
  : T extends readonly any[]
  ? number extends T["length"]
    ? false
    : true
  : false;

const t: number[] = [];
const lengthT1 = t["length"]; // number
const t2: [number] = [123];
const lengthT2 = t2["length"]; // 1

// type IsTyple = never extends never ? true : false;
// type abc = IsTuple<never>;
