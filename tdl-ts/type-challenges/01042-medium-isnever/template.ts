// not correct
// type IsNever<T> = T extends never ? true : false;

type IsNever<T> = [T] extends [never] ? true : false;

type IsNeverExtendsNever = never extends never ? true : false;
