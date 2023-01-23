type ConstructTuple<
  L extends number,
  tup extends unknown[] = []
> = tup["length"] extends L ? tup : ConstructTuple<L, [unknown, ...tup]>;

type Construct2Test = ConstructTuple<2>;
