//
type MapTypes<
  T extends Record<string, unknown>,
  R extends { mapFrom: unknown; mapTo: unknown }
> = {
  [Key in keyof T]: T[Key] extends R["mapFrom"]
    ? R extends { mapFrom: T[Key]; mapTo: unknown }
      ? R["mapTo"]
      : never
    : T[Key];
};

// this solution did not pass the last test case
type MapTypes1<
  T extends Object,
  R extends { mapFrom: unknown; mapTo: unknown }
> = {
  [K in keyof T]: IfEquals<T[K], R["mapFrom"]> extends true ? R["mapTo"] : T[K];
};

type skipParingTest = MapTypes<
  { stringToNumber: string; skipParsingMe: boolean },
  { mapFrom: string; mapTo: number }
>;

type unionTest = MapTypes<
  { name: string; date: Date },
  { mapFrom: string; mapTo: boolean } | { mapFrom: Date; mapTo: string }
>;

type unionR = (
  | { mapFrom: string; mapTo: boolean }
  | { mapFrom: Date; mapTo: string }
)["mapFrom"];
