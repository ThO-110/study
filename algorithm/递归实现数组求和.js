function sum(arr) {
  var len = arr.length;
  if (len == 0) {
    return 0;
  } else if (len == 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.slice(1));
  }
}

const arr = [1, 2, 3];

console.log(sum(arr));

// 数组扁平化
const flatten = (arr) => {
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res.push(flatten(item));
    } else {
      res.push(item);
    }
  });
  return res;
};
