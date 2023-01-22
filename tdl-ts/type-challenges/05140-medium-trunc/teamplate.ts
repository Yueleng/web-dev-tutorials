type Trunc<T extends string | number> =
  `${T}` extends `${infer Head}.${infer _}` ? Head : `${T}`;

type NegFivePointOne = Trunc<-5.1>;
