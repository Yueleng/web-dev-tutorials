import type { Equal, Expect } from "@type-challenges/utils";
import { PickByType, PickByType1 } from "./template";
interface Model {
  name: string;
  count: number;
  isReadonly: boolean;
  isEnable: boolean;
}

type cases = [
  Expect<
    Equal<
      PickByType<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>
];

type cases1 = [
  Expect<
    Equal<
      PickByType1<Model, boolean>,
      { isReadonly: boolean; isEnable: boolean }
    >
  >,
  Expect<Equal<PickByType1<Model, string>, { name: string }>>,
  Expect<Equal<PickByType1<Model, number>, { count: number }>>
];
