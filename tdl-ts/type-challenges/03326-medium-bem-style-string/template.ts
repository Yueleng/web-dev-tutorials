type BM<B extends string, M extends string[]> = M extends []
  ? B
  : M extends [string, ...infer R extends string[]]
  ? `${B}--${M[0]}` | BM<B, R>
  : never;

type _BEM<
  B extends string,
  E extends string[],
  M extends string[]
> = E extends []
  ? BM<B, M>
  : E extends [string, ...infer R extends string[]]
  ? _BEM<`${B}__${E[0]}`, R, M>
  : E;

type btn0 = _BEM<"btn", ["price"], []>;
type btn = _BEM<"btn", ["price"], ["warning", "success"]>;

// test
type btn2 = ["btn__price--warning" | "btn__price--success"] extends [
  "btn__price--warning"
]
  ? true
  : false;

// answers from github:
// type EE
type EE<T extends string[]> = T extends [] ? "" : `__${T[number]}`;
// type MM
type MM<T extends string[]> = T extends [] ? "" : `--${T[number]}`;
// type EM
type EM<E extends string[], M extends string[]> = `${EE<E>}${MM<M>}`;
// type BEM
type BEM<B extends string, E extends string[], M extends string[]> = `${B}${EM<
  E,
  M
>}`;
