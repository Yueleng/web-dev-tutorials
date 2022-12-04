type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js
// Pare Learning

// function myPick(todo, keys) {
//   const obj = {};

//   keys.forEach((key) => {
//     if (key in todo) {
//       obj[key] = todo[key];
//     }
//   });

//   return obj;
// }

// 1. return an object
// 2. populate (forEach)
// 3. todo[key] get the value
// 4. check if key is in todo

// references
// Mapped Type: https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// Indexed Access Types: https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
// Generic Constraints: https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
