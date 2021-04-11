const bt = require("./dataStructure/binaryTree");

// const inorder = (root) => {
//   if (!root) return;
//   inorder(root.left);
//   console.log(root.val);
//   inorder(root.right);
// };

// 中序遍历非递归版
const inorder = (root) => {
  if (!root) return;
  const stack = [];
  let p = root; // 指针
  // 先把该节点的子左节点都推入栈中
  while (stack.length || p) {
    while (p) {
      stack.push(p);
      p = p.left;
    }
    const h = stack.pop();
    console.log(h.val);
    p = h.right;
  }
};

inorder(bt);
