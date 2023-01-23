type ConstructTuple<
  L extends number,
  tup extends unknown[] = []
> = tup["length"] extends L ? tup : ConstructTuple<L, [...tup, unknown]>;

type Construct2Test = ConstructTuple<2>;
