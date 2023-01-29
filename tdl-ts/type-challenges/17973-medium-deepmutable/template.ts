type DeepMutable<T extends object> = {
  -readonly [P in keyof T]: T[P] extends Function
    ? T[P]
    : T[P] extends object
    ? DeepMutable<T[P]>
    : T[P];
};

type test2 = DeepMutable<{
  readonly a: () => 1;
  readonly b: string;
  readonly c: {
    readonly d: boolean;
    readonly e: {
      readonly g: {
        readonly h: {
          readonly i: true;
          readonly j: "s";
        };
        readonly k: "hello";
      };
      readonly l: readonly [
        "hi",
        {
          readonly m: readonly ["hey"];
        }
      ];
    };
  };
}>;

// Function is object? Yes it is, but why?
type functionIsObject = (() => 1) extends object ? true : false;
type removeArrReadOnly = DeepMutable<{
  readonly l: readonly [
    "hi",
    {
      readonly m: readonly ["hey"];
    }
  ];
}>;
