// we can use the tool we developed before: ReverseString & StartsWith
type EndsWith1<T extends string, U extends string> = StartsWith<
  ReverseString<T>,
  ReverseString<U>
>;

// answers from du123
type EndsWith2<T extends string, U extends string> = T extends `${infer F}${U}`
  ? true
  : false;

// since F was not used, we can replace by string
type EndsWith<T extends string, U extends string> = T extends `${string}${U}`
  ? true
  : false;
