const bt = require("./dataStructure/binaryTree");

// const preorder = (root) => {
//   if (!root) return;
//   console.log(root.val);
//   preorder(root.left);
//   preorder(root.right);
// };

// 前序遍历非递归版
const preorder = (root) => {
  if (!root) return;
  const stack = [root]; // 模拟函数堆栈
  while (stack.length) {
    const n = stack.pop();
    console.log(n.val);
    // 栈的结构是先进后出，又因为要先遍历左子树，所以把right先压入栈中
    if (n.right) stack.push(n.right);
    if (n.left) stack.push(n.left);
  }
};

preorder(bt);
