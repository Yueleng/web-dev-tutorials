interface TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

type InorderTraversal1<T extends TreeNode | null> = T extends TreeNode
  ? [
      OneLevel<T>,
      T["left"] extends null ? EmptyArray : OneLevel<T["left"]>,
      T["right"] extends null ? never : OneLevel<T["right"]>
      //   T["left"] extends null ? never : ...InorderTraversal1<T['left']>,
    ]
  : [];

type OneLevel<T extends TreeNode | null> = T extends TreeNode
  ? T["val"]
  : never;

type EmptyArray = [];

// answers from github
type InorderTraversal2<T extends TreeNode | null> = T extends TreeNode
  ? T["left"] extends TreeNode
    ? [
        ...InorderTraversal2<T["left"]>,
        T["val"],
        ...InorderTraversal2<T["right"]>
      ]
    : T["right"] extends TreeNode // T['left'] is null
    ? [T["val"], ...InorderTraversal2<T["right"]>]
    : [T["val"]]
  : [];

// a better solution
type InorderTraversal<T extends TreeNode | null> = [T] extends [TreeNode] // this is vital
  ? [...InorderTraversal<T["left"]>, T["val"], ...InorderTraversal<T["right"]>]
  : [];

// what does as const mean in test cases?
type leftToRight = InorderTraversal<{
  val: 1;
  left: {
    val: 2;
    left: null;
    right: null;
  };
  right: {
    val: 3;
    left: null;
    right: null;
  };
}>;
