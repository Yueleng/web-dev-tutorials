type NumberRange<
  L extends number,
  H extends number,
  range extends number = never
> = L extends H ? H | range : NumberRange<L, MinusOne<H>, H | range>;

type TwoToNine = NumberRange<2, 9>;
