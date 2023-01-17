type Fibonacci1<N extends number> = N extends 1
  ? 1
  : N extends 2
  ? 1
  : Fibonacci1<MinusOne<N>>;

type Add<M extends Digital, N extends Digital> = [
  ...MakeDigitalArray<M>,
  ...MakeDigitalArray<N>
]["length"];

// answers github
type Fibonacci<
  T extends number,
  FB1 extends any[] = [""],
  FB2 extends any[] = [],
  C extends any[] = [""] // from bottom to top
> = T extends C["length"]
  ? [...FB1, ...FB2]["length"]
  : Fibonacci<T, FB2, [...FB1, ...FB2], [...C, ""]>;
