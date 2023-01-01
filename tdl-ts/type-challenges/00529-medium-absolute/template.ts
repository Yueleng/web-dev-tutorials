// prettier-ignore
type Absolute1<S extends string | number | bigint> = S extends `${infer F}`
  ? F extends `-${infer M}`
    ? M
    : F
  : S extends number | bigint
    ? AbsoluteNum<S>
    : never;

type AbsoluteNum<N extends number | bigint> = `${N}` extends `-${infer M}`
  ? M // mean N is negative
  : `${N}`;

type Absolute10 = Absolute1<10>;

// 度123 答案
type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Absolute<T extends number | string | bigint> =
  `${T}` extends `${infer F}${infer R}`
    ? `${F}` extends `${Digit}`
      ? `${F}${R}`
      : `${R}` // means F is a negative sign
    : "";
