const bt = require("./dataStructure/binaryTree");

// const postorder = (root) => {
//   if (!root) return;
//   postorder(root.left);
//   postorder(root.right);
//   console.log(root.val);
// };

// 后序遍历非递归版
// 后序遍历可以类似先序遍历的倒置，所以可以先做先序遍历
// outputStack用来存放倒置后的先序遍历结果
const postorder = (root) => {
  if (!root) return;
  const outputStack = [];
  const stack = [root];
  while (stack.length) {
    const n = stack.pop();
    outputStack.push(n); // 在此处倒置，stack推出，outputStack入栈
    // 先序遍历的倒置和后序遍历还是有点区别
    // 先序遍历的倒置是 右 -> 左 -> 根
    // 后序遍历是左 -> 右 -> 根
    // 所以下面的入栈顺序也要调换
    if (n.left) stack.push(n.left);
    if (n.right) stack.push(n.right);
  }
  while (outputStack.length) {
    const n = outputStack.pop();
    console.log(n.val);
  }
};

postorder(bt);
