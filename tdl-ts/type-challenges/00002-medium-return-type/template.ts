// type MyReturnType<T extends (...args: any[]) => any> = T(args);
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
